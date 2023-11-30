import React from 'react';
import { render, screen } from '@testing-library/react';
import WinnersHeader from './';

describe('WinnersHeader Component', () => {
  it('renders all images with correct sources', () => {
    render(<WinnersHeader />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4);
    expect(images[0]).toHaveAttribute('src', 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80');
    // Add assertions for other images
  });

  it('displays the correct number of online users', () => {
    render(<WinnersHeader />);
    expect(screen.getByText('Online:')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
  });
});
