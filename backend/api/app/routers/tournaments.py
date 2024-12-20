from fastapi import APIRouter, HTTPException
from ..services.tournament_service import TournamentService
from ..models.tournament import Tournament

router = APIRouter()
tournament_service = TournamentService()

@router.get("/upcoming")
async def get_upcoming_tournaments():
    return await tournament_service.get_upcoming_tournaments()

@router.get("/{tournament_id}")
async def get_tournament_details(tournament_id: str):
    tournament = await tournament_service.get_tournament_details(tournament_id)
    if not tournament:
        raise HTTPException(status_code=404, detail="Tournament not found")
    return tournament