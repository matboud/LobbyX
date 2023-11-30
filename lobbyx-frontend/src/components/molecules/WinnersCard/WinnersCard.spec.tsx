import React from "react";
import { render, screen } from "@testing-library/react";
import WinnersCard from "./";

describe("WinnersCard Component", () => {
  const mockProps = {
    picture: "/box_.png",
    name: "John Doe",
    winningAmount: 100,
    gameName: "Poker",
    attribute: "/_next/image?url=%2Fbox_.png&w=96&q=75", // since next builds the app
  };

  it("renders the image with correct attributes", () => {
    render(<WinnersCard {...mockProps} />);
    const image = screen.getByAltText("profile picture");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.attribute);
  });

  it("displays the winner's name", () => {
    render(<WinnersCard {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });

  it("displays the winning amount", () => {
    render(<WinnersCard {...mockProps} />);
    expect(
      screen.getByText(`+ ${mockProps.winningAmount}$`)
    ).toBeInTheDocument();
  });

  it("displays the game name", () => {
    render(<WinnersCard {...mockProps} />);
    expect(screen.getByText(`Game: ${mockProps.gameName}`)).toBeInTheDocument();
  });
});
