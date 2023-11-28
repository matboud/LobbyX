import { store } from "./store";

describe("store", () => {
  it("should have the correct reducers", () => {
    const state = store.getState();

    // Check if the state has the keys for each reducer
    expect(state).toHaveProperty("games");
    expect(state).toHaveProperty("top5Games");
    expect(state).toHaveProperty("filter");
 });
});
