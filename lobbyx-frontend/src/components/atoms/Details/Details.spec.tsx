// 1. Rendering with String Description: Verifies the component renders correctly with a string description.
// 2. Rendering with Number Description: Checks if the component correctly handles and displays a numeric description.
// 3. Rendering with JSX Element Description: Ensures the component can render a JSX element as a description.

import React from "react";
import { render, screen } from "@testing-library/react";
import Details from "./";

describe("Details Component", () => {
  it("renders correctly without a description", () => {
    const term = "No Description Term";
    render(<Details dt={term} />);
    expect(screen.getByText(term)).toBeInTheDocument();
    expect(screen.queryByText("No Description")).toBeNull();
  });

  it("renders correctly without a term", () => {
    const description = "No Term Description";
    render(<Details dd={description} />);
    expect(screen.queryByText("No Term")).toBeNull();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("handles null values gracefully", () => {
    render(<Details dt={null} dd={null} />);
  });

  it("handles undefined values gracefully", () => {
    render(<Details dt={undefined} dd={undefined} />);
  });

  it("renders complex JSX elements as description", () => {
    const term = "Complex JSX Term";
    const description = (
      <div>
        <span>Part 1</span>
        <span>Part 2</span>
      </div>
    );
    render(<Details dt={term} dd={description} />);
    expect(screen.getByText(term)).toBeInTheDocument();
    expect(screen.getByText("Part 1")).toBeInTheDocument();
    expect(screen.getByText("Part 2")).toBeInTheDocument();
  });
});
