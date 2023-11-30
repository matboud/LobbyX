import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GamesGallery from "./";

jest.mock("../../atoms/GameCard", () => ({ gameName, onClick }) => (
  <div onClick={onClick}>{gameName}</div>
));
jest.mock("../../atoms/Spinner", () => () => <span>Spinner</span>);

describe("GamesGallery Component", () => {
  const mockTop5Games = [
    { name: "Game 1", likesCount: 100, icon1: "icon1.jpg", icon2: "icon2.jpg" },
  ];
  const mockGamesData = [
    { name: "Game A", likesCount: 200, icon1: "iconA.jpg", icon2: "iconB.jpg" },
  ];
  const mockHandleModal = jest.fn();

  it("renders spinner when top5Loading is true", () => {
    render(
      <GamesGallery
        top5Loading={true}
        gamesData={[]}
        handleModal={mockHandleModal}
      />
    );
    expect(screen.getByText("Spinner")).toBeInTheDocument();
  });

  it("renders top 5 games when provided", () => {
    render(
      <GamesGallery
        top5Games={mockTop5Games}
        top5Loading={false}
        gamesData={[]}
        handleModal={mockHandleModal}
      />
    );
    expect(screen.getByText("Game 1")).toBeInTheDocument();
  });

  it("calls handleModal when a game card is clicked", () => {
    render(
      <GamesGallery
        top5Games={mockTop5Games}
        top5Loading={false}
        gamesData={[]}
        handleModal={mockHandleModal}
      />
    );
    fireEvent.click(screen.getByText("Game 1"));
    expect(mockHandleModal).toHaveBeenCalledWith(mockTop5Games[0], true);
  });

  it("renders all games from gamesData", () => {
    render(
      <GamesGallery
        top5Games={[]}
        top5Loading={false}
        gamesData={mockGamesData}
        handleModal={mockHandleModal}
      />
    );
    expect(screen.getByText("Game A")).toBeInTheDocument();
  });
});
