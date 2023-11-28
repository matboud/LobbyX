import { createSlice } from "@reduxjs/toolkit";
import { Game } from "../types/game";
import { fetchTop5Games } from "../actions/game";

interface GamesState {
  top5Games?: Game[];
  loading: boolean;
  error: string | null;
}

// initial state of the top 5 games slice
const initialState: GamesState = {
  top5Games: [],
  loading: false,
  error: null,
};

const top5GamesSlice = createSlice({
  name: "top5Games",
  initialState,
  reducers: {
    // Your synchronous reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTop5Games.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTop5Games.fulfilled, (state, action) => {
        state.top5Games = action.payload;
        state.loading = false;
      })
      .addCase(fetchTop5Games.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch top 5 games";
      });
  },
});

export default top5GamesSlice.reducer;
