// 1. Image Rendering Test
// 2. srText Rendering Test
// 3. No srText Test

import React from "react";
import { render, screen } from "@testing-library/react";
import CustomImage from "./";
import { FunctionComponent } from "react";

// Mock the Next/Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ((props: any) => <img {...props} />) as FunctionComponent,
}));

describe("CustomImage Component", () => {
  it("renders the image with correct src and alt attributes", () => {
    render(
      <CustomImage src="http://example.com/test-image.jpg" alt="Test Alt" />
    );
    const image = screen.getByRole("img", {
      name: "Test Alt",
    }) as HTMLImageElement;
    expect(image.src).toContain("test-image.jpg");
    expect(image.alt).toBe("Test Alt");
  });

  it("renders the srText correctly when provided", () => {
    const srText = "Screen reader text";
    render(
      <CustomImage
        src="http://example.com/test-image.jpg"
        alt="Test Alt"
        srText={srText}
      />
    );
    expect(screen.getByText(srText)).toBeInTheDocument();
    expect(screen.getByText(srText)).toHaveClass("sr-only");
  });

  it("does not render srText span when srText is not provided", () => {
    render(
      <CustomImage src="http://example.com/test-image.jpg" alt="Test Alt" />
    );
    const srTextSpan = screen.queryByText("Screen reader text");
    expect(srTextSpan).toBeNull();
  });
});
