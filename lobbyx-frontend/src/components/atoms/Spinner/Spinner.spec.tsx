// 1. Basic Rendering
// 2. Accessible Text
// 3. Custom Class Names
// 4. SVG Element

import React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from "./";

describe("Spinner Component", () => {
  it("renders the spinner", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });

  it("contains accessible text for screen readers", () => {
    render(<Spinner />);
    const screenReaderText = screen.getByText("Loading...");
    expect(screenReaderText).toBeInTheDocument();
    expect(screenReaderText).toHaveClass("sr-only"); // Ensures text is for screen readers
  });

  it("applies custom className to the spinner", () => {
    const customClassName = "custom-class";
    render(<Spinner className={customClassName} />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("custom-class");
  });

  it("renders SVG for the spinner animation", () => {
    render(<Spinner />);
    const svgElement = screen.getByRole("status").querySelector("svg");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass("animate-spin"); // Ensures the spinner is animated
  });
});
