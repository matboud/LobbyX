import fetchMock from "jest-fetch-mock";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer, { fetchFilteredData, resetFilter } from "./filterSlice";

describe("filterSlice", () => {
  let store;

  beforeEach(() => {
    fetchMock.resetMocks();
    store = configureStore({ reducer: { filter: filterReducer } });
  });

  it("should handle initial state", () => {
    expect(store.getState().filter).toEqual({
      data: [],
      loading: false,
      error: null,
    });
  });

  it("should handle fetchFilteredData", async () => {
    const mockData = [];
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    await store.dispatch(fetchFilteredData({ metadataIds: ["1", "2", "3"] }));

    const state = store.getState().filter;
    expect(state.data).toEqual(mockData);
    expect(state.loading).toBeFalsy();
    expect(state.error).toBeNull();
  });

  it("should reset to initial state", () => {
    store.dispatch(resetFilter());
    expect(store.getState().filter).toEqual({
      data: [],
      loading: false,
      error: null,
    });
  });
});
