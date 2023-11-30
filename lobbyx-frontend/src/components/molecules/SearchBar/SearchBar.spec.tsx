import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from ".";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

// Mock fetch and debounce
jest.mock("node-fetch", () => require("jest-fetch-mock").enableMocks());
jest.mock("lodash/debounce", () => jest.fn((fn) => fn));

// Mock components
jest.mock("../../atoms/Image/", () => ({ src, alt }) => (
  <img src={src} alt={alt} />
));
jest.mock("../../templates/NativeModal", () => ({ gameData, handleModal }) => (
  <div>Mock Modal</div>
));

describe("SearchBar Component", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("renders the search input", () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("fetches suggestions after debounce when typing in the search input", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([{ id: 1, name: "Game 1", icon2: "icon-url" }])
    );
    fetch.mockResponseOnce(
      JSON.stringify([{ id: 1, name: "Game 1", icon2: "icon-url" }])
    );

    render(<SearchBar />);
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "game" },
    });

    await waitFor(() =>
      expect(fetch).toHaveBeenCalledWith(expect.stringContaining("game"))
    );
    expect(screen.getByText("Game 1")).toBeInTheDocument();
  });
});
