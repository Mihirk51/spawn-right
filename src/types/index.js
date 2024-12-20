```js
// Game types and constants
export const GAME_TYPES = {
  BGMI: 'BGMI',
  VALORANT: 'Valorant',
  CODMOBILE: 'COD Mobile'
};

export const MATCH_STATUS = {
  UPCOMING: 'upcoming',
  LIVE: 'live',
  COMPLETED: 'completed'
};

// PropTypes shapes for common data structures
export const matchShape = {
  id: PropTypes.string.isRequired,
  game: PropTypes.oneOf(Object.values(GAME_TYPES)).isRequired,
  team1: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  }).isRequired,
  team2: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  }).isRequired,
  startTime: PropTypes.string.isRequired,
  status: PropTypes.oneOf(Object.values(MATCH_STATUS)).isRequired,
  score: PropTypes.shape({
    team1: PropTypes.number,
    team2: PropTypes.number
  })
};

export const teamShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  totalWinnings: PropTypes.number.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired
};

export const playerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    kills: PropTypes.number,
    deaths: PropTypes.number,
    assists: PropTypes.number,
    rating: PropTypes.number,
    matchesPlayed: PropTypes.number.isRequired
  }).isRequired
};
```