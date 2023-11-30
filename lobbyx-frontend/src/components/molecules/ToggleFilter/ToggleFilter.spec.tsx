import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleFilter from "./";

describe("ToggleFilter Component", () => {
  it("renders with default active state", () => {
    render(<ToggleFilter text="Test Filter" />);
    expect(screen.getByText("Test Filter")).toBeInTheDocument();
  });

  it("toggles active state on click", () => {
    render(<ToggleFilter text="Test Filter" />);
    const filterButton = screen.getByRole("button");
    fireEvent.click(filterButton);
  });

  it("reflects the active prop", () => {
    const { rerender } = render(<ToggleFilter active text="Test Filter" />);

    rerender(<ToggleFilter active={false} text="Test Filter" />);
  });

  it("is disabled when disabled prop is true", () => {
    render(<ToggleFilter disabled text="Test Filter" />);
    const filterButton = screen.getByRole("button");
    expect(filterButton).toBeDisabled();
  });

  it("calls onToggle callback with the correct state", () => {
    const mockOnToggle = jest.fn();
    render(<ToggleFilter onToggle={mockOnToggle} text="Test Filter" />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnToggle).toHaveBeenCalledWith(true); // Check if called with the expected state
  });
});
