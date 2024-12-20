from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import matches, tournaments, teams, players, stats
from .core.config import settings

app = FastAPI(title="Spawn Right API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(matches.router, prefix="/api/matches", tags=["matches"])
app.include_router(tournaments.router, prefix="/api/tournaments", tags=["tournaments"])
app.include_router(teams.router, prefix="/api/teams", tags=["teams"])
app.include_router(players.router, prefix="/api/players", tags=["players"])
app.include_router(stats.router, prefix="/api/stats", tags=["stats"])