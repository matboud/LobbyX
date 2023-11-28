import { createSlice } from "@reduxjs/toolkit";
import { Game } from "@/redux/types/game";
import { fetchGames } from "@/redux/actions/game";

interface GamesState {
  games: Game[];
  loading: boolean;
  error: string | null;
}

const initialState: GamesState = {
  games: [],
  loading: false,
  error: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    // Synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.games = [...state.games, ...action.payload];
        state.loading = false;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch games";
      });
  },
});

export default gamesSlice.reducer;
