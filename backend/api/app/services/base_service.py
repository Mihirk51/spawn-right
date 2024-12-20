```python
"""
Base service class providing common database and caching functionality.
"""
from motor.motor_asyncio import AsyncIOMotorClient
import redis.asyncio as redis
from ..core.config import settings

class BaseService:
    """
    Base service class with MongoDB and Redis connections.
    
    Attributes:
        client: AsyncIOMotorClient for MongoDB connection
        db: MongoDB database instance
        redis: Redis connection for caching
    """
    
    def __init__(self):
        # Initialize MongoDB connection
        self.client = AsyncIOMotorClient(settings.MONGODB_URI)
        self.db = self.client.spawnright
        
        # Initialize Redis connection
        self.redis = redis.from_url(
            settings.REDIS_URI, 
            decode_responses=True
        )
    
    async def get_cached_data(self, key: str) -> dict | None:
        """
        Retrieve data from Redis cache.
        
        Args:
            key: Cache key to retrieve
            
        Returns:
            Cached data if exists, None otherwise
        """
        cached = await self.redis.get(key)
        return json.loads(cached) if cached else None
    
    async def set_cached_data(
        self, 
        key: str, 
        data: dict, 
        expire_seconds: int
    ) -> None:
        """
        Store data in Redis cache.
        
        Args:
            key: Cache key
            data: Data to cache
            expire_seconds: Cache expiration time in seconds
        """
        await self.redis.setex(
            key,
            expire_seconds,
            json.dumps(data)
        )
    
    async def invalidate_cache(self, *keys: str) -> None:
        """
        Remove multiple keys from cache.
        
        Args:
            keys: Cache keys to remove
        """
        if keys:
            await self.redis.delete(*keys)
```