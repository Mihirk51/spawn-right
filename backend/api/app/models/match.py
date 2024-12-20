from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field
from .team import TeamBasic

class MatchScore(BaseModel):
    team1: int
    team2: int

class Match(BaseModel):
    id: str = Field(default_factory=str)
    game: str
    team1: TeamBasic
    team2: TeamBasic
    start_time: datetime
    status: str  # upcoming, live, completed
    tournament_id: str
    score: Optional[MatchScore] = None
    
    class Config:
        json_schema_extra = {
            "example": {
                "game": "BGMI",
                "team1": {"id": "1", "name": "Team1", "logo": "logo1.png"},
                "team2": {"id": "2", "name": "Team2", "logo": "logo2.png"},
                "start_time": "2024-02-20T15:00:00Z",
                "status": "upcoming",
                "tournament_id": "tournament1"
            }
        }