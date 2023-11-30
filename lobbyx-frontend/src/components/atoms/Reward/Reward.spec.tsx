// Mocking the Image Component
// Testing the Rendering of the Image
// Testing Additional Text (String and ReactNode)
// Testing Custom Class Names
// Testing Conditional Rendering

// Reward.spec.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Reward from "./";

describe("Reward Component", () => {
  const defaultProps = {
    imageUrl: "/reward-image.jpg",
    altText: "Reward Alt Text",
    srText: "Screen Reader Text",
  };

  it("renders additional string text when provided", () => {
    const additionalText = "Additional Text";
    render(<Reward {...defaultProps} additionalText={additionalText} />);
    expect(screen.getByText(additionalText)).toBeInTheDocument();
  });

  it("renders additional ReactNode text when provided", () => {
    const additionalText = <strong>ReactNode Text</strong>;
    render(<Reward {...defaultProps} additionalText={additionalText} />);
    expect(screen.getByText("ReactNode Text")).toBeInTheDocument();
  });

  it("applies custom imageClassName to the image", () => {
    const imageCustomClassName = "image-custom-class";
    render(<Reward {...defaultProps} imageClassName={imageCustomClassName} />);
    const image = screen.getByRole("img", { name: defaultProps.altText });
    expect(image).toHaveClass(
      "flex-shrink-0",
      "w-20",
      "h-20",
      imageCustomClassName
    );
  });

  it("does not render additional text when not provided", () => {
    render(<Reward {...defaultProps} />);
    expect(screen.queryByText(/Additional Text|ReactNode Text/)).toBeNull();
  });
});
