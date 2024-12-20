from fastapi import APIRouter, HTTPException, Depends
from ..services.match_service import MatchService
from ..models.match import Match, MatchScore
from typing import List

router = APIRouter()

async def get_match_service():
    return MatchService()

@router.get("/live", response_model=List[Match])
async def get_live_matches(
    match_service: MatchService = Depends(get_match_service)
):
    """Get all currently live matches"""
    return await match_service.get_live_matches()

@router.get("/upcoming", response_model=List[Match])
async def get_upcoming_matches(
    match_service: MatchService = Depends(get_match_service)
):
    """Get upcoming matches"""
    return await match_service.get_upcoming_matches()

@router.get("/{match_id}", response_model=Match)
async def get_match_details(
    match_id: str,
    match_service: MatchService = Depends(get_match_service)
):
    """Get detailed information about a specific match"""
    match = await match_service.get_match_details(match_id)
    if not match:
        raise HTTPException(status_code=404, detail="Match not found")
    return match

@router.patch("/{match_id}/score")
async def update_match_score(
    match_id: str,
    score: MatchScore,
    match_service: MatchService = Depends(get_match_service)
):
    """Update the score for a live match"""
    success = await match_service.update_match_score(match_id, score.dict())
    if not success:
        raise HTTPException(status_code=404, detail="Match not found")
    return {"message": "Score updated successfully"}