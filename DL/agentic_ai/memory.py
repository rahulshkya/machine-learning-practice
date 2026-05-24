from agno.agent import Agent
from agno.models.groq import Groq
from agno.tools.duckduckgo import DuckDuckGoTools
from dotenv import load_dotenv
from agno.tools.yfinance import YFinanceTools
from agno.tools.baidusearch import BaiduSearchTools
import agno.db.sqlite
from agno.db.sqlite import SqliteDb

load_dotenv()

db=SqliteDb(db_file="agno.db")

def build_agent():

    return Agent(
        db=db,
        model=Groq(
            id="qwen/qwen3-32b",
            max_tokens=4096,
        ),
        
        markdown=True,
        
        add_history_to_context=True,
        
        add_datetime_to_context=True,

        tools=[YFinanceTools(), DuckDuckGoTools()],
        enable_user_memories=True
        
    )

agent = build_agent()

user_id="rahul@gmail.com"
agent.print_response("hello i am rahul shakya and i am machine learning engineer",user_id=user_id)
agent.print_response("who i am?",user_id=user_id)

print("MEMORIES : ")
print(memory := agent.get_user_memories(user_id=user_id))


