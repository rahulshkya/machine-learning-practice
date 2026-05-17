import flappy_bird_gymnasium
import gymnasium as gym
env = gym.make("FlappyBird-v0", render_mode="human")
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import random
from dqn import DQN

if torch.cuda.is_available():
    print("CUDA is available. Using GPU.")
    device = torch.device("cuda")   
else:    
    device = torch.device("cpu")

def run(self,is_training=True , reender=False):
    env = gym.make("FlappyBird-v0", render_mode="human" if reender else "rgb_array")
    num_states = env.observation_space.shape[0] #input size
    num_actions = env.action_space.n #output size
    policy_dqn=DQN(num_states,num_actions).to(device)
    state, _ = env.reset()

    while True:
        # Next action:
        # (feed the observation to your agent here)
        action = env.action_space.sample()

        # Processing:
        obs, reward, terminated, _, _ = env.step(action)
        
        # Checking if the player is still alive
        if terminated:
            break

    env.close()