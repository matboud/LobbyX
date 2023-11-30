// 1. Rendering: IT renders correctly.
// 2. Custom Styles: it has custom styles are applied.
// 3. Click Event: Ensuring the onClick handler is called when the button is clicked.
// 4. Screen Reader Text: IT has (srText) is present.

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index'; 

describe('<Button />', () => {
  it('renders the button with children', () => {
    render(<Button srText="Test Button">Click Me</Button>);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('applies custom styles', () => {
    const customStyle = 'bg-blue-500';
    render(<Button customStyles={customStyle} srText="Test Button">Click Me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass(customStyle);
    expect(button).toHaveClass('p-2.5 text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} srText="Test Button">Click Me</Button>);
    const button = screen.getByText(/click me/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('includes screen reader text', () => {
    const srText = "Accessible Button Text";
    render(<Button srText={srText}>Click Me</Button>);
    expect(screen.getByText(srText)).toBeInTheDocument();
  });
});
