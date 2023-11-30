import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./";

jest.mock("../../atoms/Button", () => ({ children }) => (
  <button>{children}</button>
));
jest.mock("../../atoms/Image", () => ({ alt }) => <img alt={alt} />);
jest.mock("../../atoms/Logo", () => () => <div>Logo</div>);
jest.mock("../../atoms/Reward", () => () => <div>Reward</div>);
jest.mock("../../molecules/SearchBar", () => () => <div>SearchBar</div>);

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(<Header />);
    expect(screen.getByText("Logo")).toBeInTheDocument();
    expect(screen.getByText("SearchBar")).toBeInTheDocument();
    expect(screen.getByText("Reward")).toBeInTheDocument();
    expect(
      screen.getByAltText("gamer profile picture - avatar")
    ).toBeInTheDocument();
  });
});

describe("Header Component Structure and Layout", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("maintains the expected structure", () => {
    const logo = screen.getByText("Logo");
    expect(logo.parentElement).toHaveClass("flex md:static");
  });
});
