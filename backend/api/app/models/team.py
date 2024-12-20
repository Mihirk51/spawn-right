from pydantic import BaseModel, Field
from typing import List

class TeamBasic(BaseModel):
    id: str = Field(default_factory=str)
    name: str
    logo: str

class Team(TeamBasic):
    rank: int
    country: str
    total_winnings: float
    players: List[str]  # List of player IDs
    
    class Config:
        json_schema_extra = {
            "example": {
                "name": "Global Esports",
                "logo": "ge_logo.png",
                "rank": 1,
                "country": "IN",
                "total_winnings": 500000.00,
                "players": ["player1", "player2"]
            }
        }