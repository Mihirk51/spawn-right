from pydantic import BaseModel
from typing import Optional

class GameStats(BaseModel):
    kills: Optional[int] = 0
    deaths: Optional[int] = 0
    assists: Optional[int] = 0
    rating: Optional[float] = 0.0
    matches_played: int = 0