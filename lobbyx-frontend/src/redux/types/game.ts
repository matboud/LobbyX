/**
 * Represents a game.
 */

export interface Game {
  id: number;
  serverGameId: string;
  extearnalGameId: string;
  frontGameId: string;
  name: string;
  title: string | null;
  ratio: string;
  status: string;
  provider: string;
  showAsProvider: string;
  providerTitle: string;
  gameOptions: any | null;
  blockedCountries: any | null;
  hasAgeRestriction: number;
  icon2: string;
  icon3: string | null;
  gameSkinId: string;
  background: string;
  likesCount: number;
}
