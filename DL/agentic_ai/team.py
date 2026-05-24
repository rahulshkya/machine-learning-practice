from agno.agent import Agent
from agno.models.groq import Groq
from agno.tools.duckduckgo import DuckDuckGoTools
from agno.tools.yfinance import YFinanceTools
from dotenv import load_dotenv
from agno.team import Team

load_dotenv()

# Individual Agents

english_agent = Agent(
    name="English Agent",
    role="You answer questions in English"
)

chinese_agent = Agent(
    name="Chinese Agent",
    role="You answer questions in Chinese"
)

german_agent = Agent(
    name="German Agent",
    role="You answer questions in German"
)

dutch_agent = Agent(
    name="Dutch Agent",
    role="You answer questions in Dutch"
)



germanic_team = Team(
    name="Germanic Team",
    role="You coordinate the team members to answer questions in German and Dutch",
    members=[
        german_agent,
        dutch_agent
    ],
    model=Groq(
        id="qwen/qwen3-32b",
        max_tokens=4096,
    ),
    show_members_responses=True
)

# -----------------------------
# Main Team
# -----------------------------

team = Team(
    name="Global Language Team",
    members=[
        english_agent,
        chinese_agent,
        germanic_team
    ],
    model=Groq(
        id="qwen/qwen3-32b",
        max_tokens=4096,
    ),
    show_members_responses=True,
    instructions="""
    all members agents must respond to answer
    the query in their specified language
    .do not call just one agent
    output the response of all agents
    """
)

# -----------------------------
# Financial Agent
# -----------------------------

def build_agent():

    return Agent(

        model=Groq(
            id="qwen/qwen3-32b",
            max_tokens=4096,
        ),

        markdown=True,

        add_datetime_to_context=True,

        tools=[
            YFinanceTools(),
            DuckDuckGoTools()
        ],

        description="""
        An agent that can search the web for news
        and financial data to answer user queries.
        """,

        instructions="""
        Format your response using markdown
        and use tables where possible.
        """
    )

agent = build_agent()

# -----------------------------
# Run
# -----------------------------

team.print_response("What is the capital of Germany?")