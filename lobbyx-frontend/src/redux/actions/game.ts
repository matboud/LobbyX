import { createAsyncThunk } from "@reduxjs/toolkit";
import { Game } from "@/redux/types/game";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (params: { page: number; perPage: number }) => {
    const response = await fetch(
      `http://localhost:9080/api/all/${params.page}/${params.perPage}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }
    const data = await response.json();
    return data as Game[];
  }
);

export const fetchTop5Games = createAsyncThunk(
  "games/fetchTop5Games",
  async () => {
    const response = await fetch("http://localhost:9080/api/top5");
    if (!response.ok) {
      throw new Error("Failed to fetch top 5 games");
    }
    
    const data = await response.json();
    return data as Game[];
  }
);
