import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './FiltersSidebar';

describe('Sidebar Component', () => {
  it('opens and closes the sidebar correctly', () => {
    render(
      <Sidebar>
        <p>Sidebar content</p>
      </Sidebar>
    );

    // Initially, the sidebar should not be visible
    expect(screen.queryByText('Sidebar content')).not.toBeInTheDocument();

    // Simulate clicking the button to open the sidebar
    const openButton = screen.getByRole('button', { name: 'Open sidebar' });
    fireEvent.click(openButton);

    // Now, the sidebar should be visible
    expect(screen.getByText('Sidebar content')).toBeInTheDocument();

    // Simulate clicking the button to close the sidebar
    const closeButton = screen.getByRole('button', { name: 'Close sidebar' });
    fireEvent.click(closeButton);

    // The sidebar should not be visible again
    expect(screen.queryByText('Sidebar content')).not.toBeInTheDocument();
  });
});
