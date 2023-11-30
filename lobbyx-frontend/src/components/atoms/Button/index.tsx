import React, { ReactNode, ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  customStyles?: string;
  srText: string; // sr-only span
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  customStyles,
  srText,
  onClick,
  ...rest
}) => {
  const defaultStyles =
    "p-2.5 text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out";

  // Combine default styles with custom styles if provided
  const buttonStyles = classNames(defaultStyles, customStyles);

  return (
    <button type="button" className={buttonStyles} onClick={onClick} {...rest}>
      {srText && <span className="sr-only">{srText}</span>}
      {children}
    </button>
  );
};

export default Button;
