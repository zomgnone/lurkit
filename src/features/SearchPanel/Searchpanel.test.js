import React from "react";
import { render, screen } from '@testing-library/react';
import { SearchPanel } from './SearchPanel';

describe('Search panel', () => {
  it('renders component', () => {
    render(<SearchPanel />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  })
})