from .base_service import BaseService
import json
from datetime import datetime

class TournamentService(BaseService):
    def __init__(self):
        super().__init__()
        self.collection = self._get_collection("tournaments")

    async def get_upcoming_tournaments(self):
        cache_key = 'upcoming_tournaments'
        cached = self.redis.get(cache_key)
        if cached:
            return json.loads(cached)
        
        cursor = self.collection.find({
            "start_date": {"$gt": datetime.utcnow()},
            "status": "upcoming"
        }).sort("start_date", 1).limit(10)
        
        tournaments = await cursor.to_list(length=10)
        self.redis.setex(cache_key, 300, json.dumps(tournaments))
        return tournaments

    async def get_tournament_details(self, tournament_id: str):
        cache_key = f'tournament:{tournament_id}'
        cached = self.redis.get(cache_key)
        if cached:
            return json.loads(cached)
        
        tournament = await self.collection.find_one({"_id": tournament_id})
        if tournament:
            self.redis.setex(cache_key, 300, json.dumps(tournament))
        return tournament