import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import { fetchGames } from "@/redux/actions/game";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("gamesSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { games: gamesReducer } });
  });

  it("should handle initial state", () => {
    expect(store.getState().games).toEqual({
      games: [],
      loading: false,
      error: null,
    });
  });

  it("should handle fetchGames pending", async () => {
    // Add a delay to the mock response
    fetchMock.mockResponse(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve(JSON.stringify([])), 100)
        )
    );

    const promise = store.dispatch(fetchGames());

    // Check the state immediately after dispatching
    let state = store.getState().games;
    expect(state.loading).toBeTruthy();

    // Wait for the promise to resolve
    await promise;

    // Optionally check the state again after resolution
    state = store.getState().games;
    expect(state.loading).toBeFalsy(); // The loading should now be false
  });

  it("should handle fetchGames fulfilled", async () => {
    const mockGamesData = [];
    fetchMock.mockResponseOnce(JSON.stringify(mockGamesData));
    await store.dispatch(fetchGames());
    const state = store.getState().games;
    expect(state.games).toEqual(mockGamesData);
    expect(state.loading).toBeFalsy();
  });

  it("should handle fetchGames rejected", async () => {
    fetchMock.mockReject(new Error("Network Error"));

    // Dispatch the action with required parameters
    await store.dispatch(fetchGames({ page: 1, perPage: 10 }));

    const state = store.getState().games;
    expect(state.error).toEqual("Network Error");
    expect(state.loading).toBeFalsy();
  });
});
