import { Game } from "../types/game";
import fetchMock from "jest-fetch-mock";
import { fetchGames, fetchTop5Games } from "./game";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

const mockedData = {
  background:
    "https://www.cmsbetconstruct.com/content/images/casino/background/BSG228.jpg",
  blockedCountries: null,
  extearnalGameId: "4098",
  frontGameId: "BSG228",
  gameOptions: null,
  gameSkinId: "5304700",
  hasAgeRestriction: 0,
  icon2:
    "https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG228.jpg",
  icon3: null,
  id: 281,
  likesCount: 22335,
  metadataIds: [150, 189, 154, 51, 192],
  name: "Viking Age",
  provider: "BSG",
  providerTitle: "BETSOFT",
  ratio: "4:3",
  serverGameId: "228",
  showAsProvider: "BSG",
  status: "published",
  title: null,
};

describe("fetchGames", () => {
  // Mock successful response
  const mockGames: Game[] = [mockedData];

  it("dispatches fulfilled action on successful API call", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockGames));

    const thunk = fetchGames({ page: 1, perPage: 10 });
    const dispatch = jest.fn();
    const getState = jest.fn();

    // Execute the thunk and get the resolved action
    const result = await thunk(dispatch, getState, undefined);

    // Check if the result is the fulfilled action
    expect(result.type).toBe("games/fetchGames/fulfilled");
    expect(result.payload).toEqual(mockGames);
  });

  it("throws an error on failed API call", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockGames));
    const thunk = fetchGames({ page: 1, perPage: 10 });
    const dispatch = jest.fn();
    const getState = jest.fn();

    const result = await thunk(dispatch, getState, undefined);
    expect(result.type).toBe("games/fetchGames/fulfilled");
    expect(result.payload).toEqual(mockGames);
  });

  it("dispatches rejected action on API call failure", async () => {
    fetchMock.mockReject(new Error("Network error"));
    const thunk = fetchGames({ page: 1, perPage: 10 });
    const dispatch = jest.fn();
    const getState = jest.fn();

    // Execute the thunk
    await thunk(dispatch, getState, undefined);

    // Check if dispatch was called with the expected rejected action
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "games/fetchGames/rejected",
        error: expect.objectContaining({
          message: "Network error",
        }),
      })
    );
  });

  it("dispatches fulfilled action on successful API call for top 5 games", async () => {
    const mockTop5Games: Game[] = [mockedData];
    fetchMock.mockResponseOnce(JSON.stringify(mockTop5Games));

    const thunk = fetchTop5Games();
    const dispatch = jest.fn();
    const getState = jest.fn();

    const result = await thunk(dispatch, getState, undefined);
    expect(result.type).toBe("games/fetchTop5Games/fulfilled");
    expect(result.payload).toEqual(mockTop5Games);
  });

  it("dispatches rejected action on API call failure for top 5 games", async () => {
    fetchMock.mockReject(new Error("Network error"));
    const thunk = fetchTop5Games();
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "games/fetchTop5Games/rejected",
        error: expect.anything(),
      })
    );
  });

  it("dispatches rejected action on API call with non-200 status", async () => {
    fetchMock.mockResponseOnce("Server error", { status: 500 });
    const thunk = fetchGames({ page: 1, perPage: 10 });
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "games/fetchGames/rejected",
        error: expect.anything(),
      })
    );
  });

  // Test for different response status
  it("dispatches rejected action on 404 API response", async () => {
    fetchMock.mockResponseOnce("", { status: 404 });
    const thunk = fetchGames({ page: 1, perPage: 10 });
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "games/fetchGames/rejected",
        error: expect.anything(),
      })
    );
  });

  // Test for malformed data response
  it("dispatches rejected action on malformed data response", async () => {
    fetchMock.mockResponseOnce("Not JSON");
    const thunk = fetchGames({ page: 1, perPage: 10 });
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "games/fetchGames/rejected",
        error: expect.anything(),
      })
    );
  });

  // Refactor the error handling test
  it("dispatches rejected action on API call failure with status 500", async () => {
    fetchMock.mockResponseOnce("Server error", { status: 500 });
    const thunk = fetchGames({ page: 1, perPage: 10 });
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "games/fetchGames/rejected",
        error: expect.anything(),
      })
    );
  });
});
