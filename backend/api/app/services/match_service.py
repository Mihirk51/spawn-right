from motor.motor_asyncio import AsyncIOMotorClient
from ..models.match import Match
from ..core.config import settings
from redis import Redis
import json

class MatchService:
    def __init__(self):
        self.client = AsyncIOMotorClient(settings.MONGODB_URI)
        self.db = self.client.spawnright
        self.redis = Redis.from_url(settings.REDIS_URI)

    async def get_live_matches(self):
        # First try redis cache
        cached = self.redis.get('live_matches')
        if cached:
            return json.loads(cached)
            
        # If not in cache, get from MongoDB
        cursor = self.db.matches.find({"status": "live"})
        matches = await cursor.to_list(length=10)
        
        # Cache the result
        self.redis.setex('live_matches', 30, json.dumps(matches))
        return matches

    async def update_match_score(self, match_id: str, score: dict):
        result = await self.db.matches.update_one(
            {"_id": match_id},
            {"$set": {"score": score}}
        )
        if result.modified_count:
            # Invalidate cache
            self.redis.delete('live_matches')
        return result.modified_count > 0