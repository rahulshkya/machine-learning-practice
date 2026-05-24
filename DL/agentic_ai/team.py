from agno.agent import Agent
from agno.models.groq import Groq
from agno.tools.duckduckgo import DuckDuckGoTools
from dotenv import load_dotenv
from agno.tools.yfinance import YFinanceTools
from agno.tools.baidusearch import BaiduSearchTools
from agno.db.sqlite import SQLiteDB

load_dotenv()

def build_agent():

    return Agent(

        model=Groq(
            id="qwen/qwen3-32b",
            max_tokens=4096,
        ),
        
        markdown=True,
        
        
        
        add_datetime_to_context=True,

        tools=[YFinanceTools(), DuckDuckGoTools()],
        description="An agent that can search the web for news and financial data to answer user queries.",
        instructions="format your response using markdown and use tables to display data where possible."
    )

agent = build_agent()

agent.print_response("Search recent news about Apple Inc.")


