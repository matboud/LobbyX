import React from "react";
import { render, screen } from "@testing-library/react";
import WinnersGallery from "./";

jest.mock(
  "../../molecules/WinnersCard",
  () =>
    ({ name, winningAmount, gameName }) =>
      <div>{`${name}, ${winningAmount}, ${gameName}`}</div>
);

describe("WinnersGallery Component", () => {
  const mockWinners = [
    { id: "1", name: "Winner 1", image: "img1.jpg", win: 100, game: "Game 1" },
    { id: "2", name: "Winner 2", image: "img2.jpg", win: 200, game: "Game 2" },
  ];

  it("renders without crashing", () => {
    render(
      <WinnersGallery title={<span>Winners</span>} winners={mockWinners} />
    );
    expect(screen.getByText("Winners")).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(
      <WinnersGallery title={<span>Champions</span>} winners={mockWinners} />
    );
    expect(screen.getByText("Champions")).toBeInTheDocument();
  });

  it("renders a WinnersCard for each winner", () => {
    render(
      <WinnersGallery title={<span>Winners</span>} winners={mockWinners} />
    );
    expect(screen.getByText("Winner 1, 100, Game 1")).toBeInTheDocument();
    expect(screen.getByText("Winner 2, 200, Game 2")).toBeInTheDocument();
  });
});
