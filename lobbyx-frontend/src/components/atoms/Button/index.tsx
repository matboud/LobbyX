import React, { ReactNode, ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode; // Content: text | icon | image.
  customStyles?: string;
  srText: string; // Text for the sr-only span
}

const Button: React.FC<ButtonProps> = ({
  children,
  customStyles,
  srText,
  ...rest
}) => {
  const defaultStyles =
    "p-2.5 text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out";

  // Combine default styles with custom styles if provided
  const buttonStyles = classNames(defaultStyles, customStyles);

  return (
    <button type="button" className={buttonStyles} {...rest}>
      {srText && <span className="sr-only">{srText}</span>}
      {children}
    </button>
  );
};

export default Button;
