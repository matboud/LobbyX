import React, { ReactNode } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "."; 

type ButtonWrapperProps = {
  srText?: string;
  customStyles?: string;
  children: ReactNode;
  onClick?: () => void;
};

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  srText = "",
  customStyles,
  children,
  onClick,
}) => {
  return (
    <Button srText={srText} customStyles={customStyles} onClick={onClick}>
      {children}
    </Button>
  );
};

export { ButtonWrapper };

describe("Button Component", () => {
  test("renders children and handles click events", () => {
    const handleClick = jest.fn();
    render(
      <ButtonWrapper srText="Test button" onClick={handleClick}>
        Click Me
      </ButtonWrapper>
    );

    const button = screen.getByRole("button", { name: "Test button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies custom styles if provided", () => {
    render(
      <Button srText="Styled button" customStyles="bg-blue-500">
        Styled
      </Button>
    );
    const button = screen.getByRole("button", { name: "Styled button" });
    expect(button).toHaveClass("bg-blue-500");
  });

  test("renders sr-only span when srText is provided", () => {
    render(<Button srText="Accessible button">Accessible</Button>);
    const srOnlySpan = screen.getByText("Accessible");
    expect(srOnlySpan).toBeInTheDocument();
    expect(srOnlySpan).toHaveClass("sr-only");
  });

  test("does not render sr-only span when srText is not provided", () => {
    render(<Button srText="No SR Text">No SR Text</Button>);
    const srOnlySpan = screen.queryByText("No SR Text");
    expect(srOnlySpan).not.toBeInTheDocument();
  });

  test("does not require onClick prop", () => {
    render(<Button srText="No onClick">No onClick</Button>);
    const button = screen.getByRole("button", { name: "No onClick" });
    fireEvent.click(button); // Ensure it doesn't throw an error
  });
});
