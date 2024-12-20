```python
"""
Validation utilities for the API.
"""
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, validator

class DateTimeValidator(BaseModel):
    """Base model with datetime validation."""
    
    @validator('*', pre=True)
    def validate_datetime(cls, v):
        """Convert string timestamps to datetime objects."""
        if isinstance(v, str):
            try:
                return datetime.fromisoformat(v.replace('Z', '+00:00'))
            except ValueError:
                raise ValueError('Invalid datetime format')
        return v

def validate_game_type(game: str) -> str:
    """
    Validate game type against supported games.
    
    Args:
        game: Game identifier to validate
        
    Returns:
        str: Validated game identifier
        
    Raises:
        ValueError: If game type is not supported
    """
    valid_games = {'BGMI', 'Valorant', 'CODMobile'}
    if game not in valid_games:
        raise ValueError(
            f"Invalid game type. Must be one of: {', '.join(valid_games)}"
        )
    return game

def validate_match_status(status: str) -> str:
    """
    Validate match status.
    
    Args:
        status: Status to validate
        
    Returns:
        str: Validated status
        
    Raises:
        ValueError: If status is invalid
    """
    valid_statuses = {'upcoming', 'live', 'completed'}
    if status not in valid_statuses:
        raise ValueError(
            f"Invalid status. Must be one of: {', '.join(valid_statuses)}"
        )
    return status
```