import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WinnersSidebar from "./WinnersSidebar";

describe("WinnersSidebar Component", () => {
  it("opens and closes the sidebar correctly", () => {
    render(
      <WinnersSidebar>
        <p>Winners content</p>
      </WinnersSidebar>
    );

    // Initially, the sidebar should not be visible
    expect(screen.queryByText("Winners content")).not.toBeInTheDocument();

    // Simulate clicking the button to open the sidebar
    const openButton = screen.getByRole("button", { name: "Open sidebar" });
    fireEvent.click(openButton);

    // Now, the sidebar should be visible
    expect(screen.getByText("Winners content")).toBeInTheDocument();

    // Simulate clicking the close button in the sidebar
    const closeButton = screen.getByRole("button", { name: "Close panel" });
    fireEvent.click(closeButton);

    // The sidebar should not be visible again
    expect(screen.queryByText("Winners content")).not.toBeInTheDocument();
  });
});
