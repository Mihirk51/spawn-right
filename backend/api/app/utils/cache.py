```python
"""
Utility functions for cache management.
"""
from functools import wraps
from typing import Callable
import json

def cache_response(
    key_prefix: str,
    ttl_seconds: int = 300
) -> Callable:
    """
    Decorator for caching function responses in Redis.
    
    Args:
        key_prefix: Prefix for the cache key
        ttl_seconds: Time to live in seconds
        
    Returns:
        Callable: Decorated function
    """
    def decorator(func):
        @wraps(func)
        async def wrapper(self, *args, **kwargs):
            # Generate cache key
            cache_key = f"{key_prefix}:{':'.join(str(arg) for arg in args)}"
            if kwargs:
                cache_key += f":{json.dumps(kwargs, sort_keys=True)}"
            
            # Try to get from cache
            cached = await self.redis.get(cache_key)
            if cached:
                return json.loads(cached)
            
            # Get fresh data
            result = await func(self, *args, **kwargs)
            
            # Cache the result
            if result:
                await self.redis.setex(
                    cache_key,
                    ttl_seconds,
                    json.dumps(result)
                )
            
            return result
        return wrapper
    return decorator
```