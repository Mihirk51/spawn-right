from pydantic import BaseModel, Field
from typing import Optional
from .game_stats import GameStats

class Player(BaseModel):
    id: str = Field(default_factory=str)
    name: str
    photo: str
    team_id: str
    country: str
    ign: str  # In-game name
    stats: dict[str, GameStats]  # Game-specific stats
    social: dict[str, str]  # Social media links
    
    class Config:
        json_schema_extra = {
            "example": {
                "name": "Sid Joshi",
                "photo": "sid.jpg",
                "team_id": "team1",
                "country": "IN",
                "ign": "Sid",
                "stats": {
                    "valorant": {
                        "kills": 1500,
                        "deaths": 800,
                        "assists": 400,
                        "rating": 1.2,
                        "matches_played": 100
                    }
                },
                "social": {
                    "twitter": "https://twitter.com/sid",
                    "instagram": "https://instagram.com/sid"
                }
            }
        }