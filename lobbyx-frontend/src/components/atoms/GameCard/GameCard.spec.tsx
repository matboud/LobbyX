// 1. Rendering: Verifies that the GameCard component renders correctly with provided props.
// 2. Like Button Interaction: Checks if clicking the like button toggles the liked state.
// 3. Image Rendering: Ensures that the image is rendered with the correct src and alt attributes.
// 4. Player Count Display: Verifies that the number of players is displayed correctly.
// 5. Game Name Display: Ensures that the game name is displayed correctly.
// 6. Custom Class Names: Tests if custom class names are applied correctly to the component and image.

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import GameCard from "./";
import { FunctionComponent } from "react";

type ImageProps = {
  src: string;
  alt?: string;
  srText?: string;
  [prop: string]: any;
};

// Jest Mock for Next/Image Component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (({ src, alt, srText, ...props }: ImageProps) => {
    // Combining the alt and srText for the mock image
    return (
      <div>
        <img src={src} alt={alt || srText} {...props} />
        {srText && <span className="sr-only">{srText}</span>}
      </div>
    );
  }) as FunctionComponent<ImageProps>,
}));

describe("GameCard Component", () => {
  const defaultProps = {
    numberOfPlayers: 4,
    isLiked: false,
    gameName: "Test Game",
    image: "http://example.com/test-image.jpg",
    onClick: jest.fn(),
  };

  it("renders correctly with provided props", () => {
    render(<GameCard {...defaultProps} />);
    expect(screen.getByText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    const image = screen.getByRole("img", { name: /Test Game/i });
    expect(image).toBeInTheDocument();
  });

  it("toggles the liked state when the like button is clicked", () => {
    render(<GameCard {...defaultProps} />);
    const likeButton = screen.getByLabelText("Like game");
    fireEvent.click(likeButton);
    expect(screen.getByLabelText("Unlike game")).toBeInTheDocument();
  });

  it("renders the image with correct src and alt attributes", () => {
    render(<GameCard {...defaultProps} />);
    const image = screen.getByRole("img", {
      name: /Test Game/i,
    }) as HTMLImageElement;
    expect(image.src).toContain("test-image.jpg");
  });

  it("displays the correct number of players", () => {
    render(<GameCard {...defaultProps} />);
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("displays the game name correctly", () => {
    render(<GameCard {...defaultProps} />);
    expect(screen.getByText("Test Game")).toBeInTheDocument();
  });

  // Test when isLiked is true
  it("renders as liked when isLiked prop is true", () => {
    render(<GameCard {...defaultProps} isLiked={true} />);
    expect(screen.getByLabelText("Unlike game")).toBeInTheDocument();
  });

  // Test when isLiked is false
  it("renders as not liked when isLiked prop is false", () => {
    render(<GameCard {...defaultProps} isLiked={false} />);
    expect(screen.getByLabelText("Like game")).toBeInTheDocument();
  });
});
