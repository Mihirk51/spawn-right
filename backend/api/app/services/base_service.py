from motor.motor_asyncio import AsyncIOMotorClient
from redis import Redis
from ..core.config import settings

class BaseService:
    def __init__(self):
        self.client = AsyncIOMotorClient(settings.MONGODB_URI)
        self.db = self.client.spawnright
        self.redis = Redis.from_url(settings.REDIS_URI)
        
    def _get_collection(self, name: str):
        return self.db[name]