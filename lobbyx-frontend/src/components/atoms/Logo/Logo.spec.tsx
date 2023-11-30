// 1. Mocking Image Component
// 2. Rendering Logo as expected
// 3. Conditional shadow testing

import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./";

// Optional: Mock for Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("Logo Component", () => {
  it("renders the logo image with transformed src attribute", () => {
    render(<Logo />);
    const logo = screen.getByRole("img", { name: /logo/i });
    expect(logo).toHaveAttribute("src", expect.stringContaining("/LobbyX.png"));
  });

  it("does not render shadow when showShadow is false", () => {
    render(<Logo showShadow={false} />);
    const shadowDiv = screen.queryByTestId("logo-shadow");
    expect(shadowDiv).toBeNull();
  });
});
