import React from 'react';
import { render, screen } from '@testing-library/react';
import ContainerFluid from './';

describe('ContainerFluid Component', () => {
  
  it('renders children correctly', () => {
    render(
      <ContainerFluid>
        <div>Test Child</div>
      </ContainerFluid>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('applies custom class names', () => {
    const customClassName = 'custom-class';
    render(
      <ContainerFluid className={customClassName}>
        <div>Test Child</div>
      </ContainerFluid>
    );
    const container = screen.getByText('Test Child').parentElement;
    expect(container).toHaveClass(customClassName);
    expect(container).toHaveClass('max-w-[90rem]');
  });
});
