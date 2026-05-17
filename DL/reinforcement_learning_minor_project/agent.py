
import argparse
import flappy_bird_gymnasium
import gymnasium as gym
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import random
from experiance_replay import ReplayMemory
from dqn import DQN
import itertools
import yaml
import os
import argparse
from collections import deque

if torch.cuda.is_available():
    print("CUDA is available. Using GPU.")
    device = torch.device("cuda")
else:
    device = torch.device("cpu")

RUNS_DIR = "run"
os.makedirs(RUNS_DIR,exist_ok=True)

class Agent:
    def __init__(self, param_set):
        self.param_set = param_set
        
        with open("parameters.yaml", "r") as file:
            all_param_sets = yaml.safe_load(file)[param_set]

            self.learning_rate = all_param_sets["learning_rate"]
            self.gamma = all_param_sets["gamma"]
            self.epsilon_init = all_param_sets["epsilon_init"]
            self.epsilon_min = all_param_sets["epsilon_min"]
            self.epsilon_decay = all_param_sets["epsilon_decay"]
            self.minibatch_size = all_param_sets["minibatch_size"]
            self.network_sync_rate = all_param_sets["network_sync_rate"]
            self.replay_memory_size = all_param_sets["replay_memory_size"]
            self.reward_threshold = all_param_sets["reward_threshold"]
            self.alpha = all_param_sets["alpha"]
            
            self.loss_fn = nn.MSELoss()
            self.optimizer = None  # Will be initialized after creating the DQN model
            

            self.LOG_FILE = os.path.join(RUNS_DIR,f"{self.param_set}.log")
            self.MODEL_FILE = os.path.join(RUNS_DIR,f"{self.param_set}.pt")
    def run(self, is_training=True, render=False):
        env = gym.make("FlappyBird-v0", render_mode="human" if render else "rgb_array")
        num_states = env.observation_space.shape[0]  # input size
        num_actions = env.action_space.n  # output size

        policy_dqn = DQN(num_states, num_actions).to(device)
        self.optimizer = optim.Adam(policy_dqn.parameters(), lr=self.learning_rate)

        memory = None
        if is_training:
            memory = ReplayMemory(maxlen=self.replay_memory_size)
            epsilon = self.epsilon_init

            target_dqn = DQN(num_states, num_actions).to(device)
            target_dqn.load_state_dict(policy_dqn.state_dict())

            steps = 0
            best_reward = -float('inf')
        else:
            # load best policy for evaluation
            policy_dqn.load_state_dict(torch.load(self.MODEL_FILE, map_location=device))
            policy_dqn.eval()
            epsilon = 0.0

        for episode in itertools.count():
            state, _ = env.reset()
            episode_reward = 0.0
            terminated = False
            state = torch.tensor(state, dtype=torch.float32).to(device)

            while (not terminated and episode_reward < self.reward_threshold):
                # Action selection: epsilon-greedy
                if is_training and random.random() < epsilon:
                    action = env.action_space.sample()
                else:
                    with torch.no_grad():
                        action = policy_dqn(state.unsqueeze(0)).argmax(dim=1).item()

                # Environment step
                next_state, reward, terminated, _, _ = env.step(action)
                episode_reward += reward

                # Convert to tensors
                next_state = torch.tensor(next_state, dtype=torch.float32).to(device)
                reward = torch.tensor([reward], dtype=torch.float32).to(device)

                if is_training:
                    memory.append((state, action, reward, next_state, float(terminated)))
                    steps += 1

                state = next_state

                print(f"Episode: {episode}, Reward: {episode_reward}, Epsilon: {epsilon:.4f}")

            if is_training:
                # epsilon decay
                epsilon = max(self.epsilon_min, epsilon * self.epsilon_decay)

                if episode_reward > best_reward:
                    log_msg = f"New best reward: {episode_reward} at episode {episode}\n"
                    print(log_msg)
                    with open(self.LOG_FILE, "a") as log_file:
                        log_file.write(log_msg)

                    torch.save(policy_dqn.state_dict(), self.MODEL_FILE)
                    best_reward = episode_reward

            # Training step: sample and optimize
            if is_training and len(memory) > self.minibatch_size:
                mini_batch = memory.sample(self.minibatch_size)
                self.optimize(mini_batch, policy_dqn, target_dqn)

                # sync the target network with policy network every network_sync_rate steps
                if steps >= self.network_sync_rate:
                    target_dqn.load_state_dict(policy_dqn.state_dict())
                    steps = 0

        # env.close()

    def optimize(self, mini_batch, policy_dqn, target_dqn):
        # Unpack experiences
        states, actions, rewards, next_states, dones = zip(*mini_batch)

        states = torch.stack(states).to(device)
        next_states = torch.stack(next_states).to(device)

        actions = torch.tensor(actions, dtype=torch.int64).unsqueeze(1).to(device)
        rewards = torch.tensor(rewards, dtype=torch.float32).unsqueeze(1).to(device)
        dones = torch.tensor(dones, dtype=torch.float32).unsqueeze(1).to(device)

        # Compute target Q-values using target network
        with torch.no_grad():
            max_next_q = target_dqn(next_states).max(1)[0].unsqueeze(1)
            target_q_values = rewards + (1 - dones) * self.gamma * max_next_q

        # Compute current Q-values
        current_q_values = policy_dqn(states).gather(dim=1, index=actions)

        # Compute loss and optimize
        loss = self.loss_fn(current_q_values, target_q_values)
        self.optimizer.zero_grad()
        loss.backward()
        self.optimizer.step()

        return loss.item()



if __name__ == "__main__":
    #parse command line inputs
    parser = argparse.ArgumentParser(description="DQN Agent for Flappy Bird")
    parser.add_argument("hyperparameters",help='')
    parser.add_argument('--train',help='Train the agent',action='store_true')
    args=parser.parse_args()

    dql =Agent(param_set=args.hyperparameters)

    if args.train:
        dql.run(is_training=True)

    else:
        dql.run(is_training=False, render=True)
    





# ...existing code...   