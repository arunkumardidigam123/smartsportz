// ── SmartSportz TypeScript Types ──────────────────────────

export interface NavItem {
  name: string;
  path: string;
  icon: string;
  pattern?: RegExp;
}

export interface Tournament {
  id: string;
  name: string;
  sport: string;
  status: 'LIVE' | 'REGISTRATION_OPEN' | 'UPCOMING' | 'COMPLETED';
  teams: number;
  maxTeams: number;
  startDate: string;
  location: string;
  image: string;
  registrationFee?: number;
}

export interface Player {
  id: string;
  name: string;
  sport: string;
  team: string;
  position: string;
  avatar: string;
  stats: Record<string, number | string>;
}

export interface Team {
  id: string;
  name: string;
  sport: string;
  city: string;
  logo: string;
  players: number;
  wins: number;
  losses: number;
}

export interface MatchScore {
  teamA: { name: string; logo: string; score: string };
  teamB: { name: string; logo: string; score: string };
  status: 'LIVE' | 'COMPLETED' | 'UPCOMING';
  venue: string;
  tournament: string;
}

export interface StatsCard {
  label: string;
  value: string | number;
  change?: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
}
