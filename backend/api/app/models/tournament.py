from pydantic import BaseModel, Field
from datetime import datetime
from typing import List

class Tournament(BaseModel):
    id: str = Field(default_factory=str)
    name: str
    game: str
    start_date: datetime
    end_date: datetime
    prize_pool: float
    teams: List[str]  # List of team IDs
    status: str  # upcoming, ongoing, completed
    location: str
    format: str  # single elimination, double elimination, round robin
    
    class Config:
        json_schema_extra = {
            "example": {
                "name": "BGMI Pro League 2024",
                "game": "BGMI",
                "start_date": "2024-03-01T00:00:00Z",
                "end_date": "2024-03-15T00:00:00Z",
                "prize_pool": 1000000.00,
                "teams": ["team1", "team2"],
                "status": "upcoming",
                "location": "Mumbai, India",
                "format": "double elimination"
            }
        }