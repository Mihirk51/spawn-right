```python
"""
Service handling match-related operations with caching.
"""
from datetime import datetime
from fastapi import HTTPException
from .base_service import BaseService

class MatchService(BaseService):
    """
    Service for managing esports matches.
    
    Handles CRUD operations for matches with Redis caching
    and MongoDB persistence.
    """
    
    def __init__(self):
        super().__init__()
        self.collection = self.db.matches
        
        # Cache expiration times (in seconds)
        self.LIVE_CACHE_TTL = 30
        self.UPCOMING_CACHE_TTL = 300
        self.MATCH_DETAILS_TTL = 300
    
    async def get_live_matches(self):
        """
        Retrieve currently live matches.
        
        Returns:
            list: Live matches, sorted by start time
        """
        # Try cache first
        cached = await self.get_cached_data('live_matches')
        if cached:
            return cached
            
        # Query database if not in cache
        cursor = self.collection.find({
            "status": "live",
            "start_time": {"$lte": datetime.utcnow()}
        }).sort("start_time", -1).limit(10)
        
        matches = await cursor.to_list(length=10)
        
        # Cache results
        if matches:
            await self.set_cached_data(
                'live_matches',
                matches,
                self.LIVE_CACHE_TTL
            )
        
        return matches

    async def get_upcoming_matches(self):
        """
        Retrieve upcoming matches.
        
        Returns:
            list: Upcoming matches, sorted by start time
        """
        cached = await self.get_cached_data('upcoming_matches')
        if cached:
            return cached
            
        cursor = self.collection.find({
            "status": "upcoming",
            "start_time": {"$gt": datetime.utcnow()}
        }).sort("start_time", 1).limit(10)
        
        matches = await cursor.to_list(length=10)
        
        if matches:
            await self.set_cached_data(
                'upcoming_matches',
                matches,
                self.UPCOMING_CACHE_TTL
            )
        
        return matches

    async def get_match_details(self, match_id: str):
        """
        Get detailed information about a specific match.
        
        Args:
            match_id: Unique identifier of the match
            
        Returns:
            dict: Match details
            
        Raises:
            HTTPException: If match is not found
        """
        cache_key = f'match:{match_id}'
        cached = await self.get_cached_data(cache_key)
        if cached:
            return cached
            
        match = await self.collection.find_one({"_id": match_id})
        
        if not match:
            raise HTTPException(
                status_code=404,
                detail="Match not found"
            )
            
        await self.set_cached_data(
            cache_key,
            match,
            self.MATCH_DETAILS_TTL
        )
            
        return match

    async def update_match_score(self, match_id: str, score: dict):
        """
        Update the score of a match.
        
        Args:
            match_id: Match identifier
            score: New score data
            
        Returns:
            bool: True if update was successful
        """
        result = await self.collection.update_one(
            {"_id": match_id},
            {
                "$set": {
                    "score": score,
                    "updated_at": datetime.utcnow()
                }
            }
        )
        
        if result.modified_count:
            # Invalidate affected caches
            await self.invalidate_cache(
                'live_matches',
                f'match:{match_id}'
            )
            
        return result.modified_count > 0
```