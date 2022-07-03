import React from "react";
import { screen, render } from '@testing-library/react';
import { SubredditsPanel } from './SubredditsPanel';

describe('MainPanel', () => {
  it('renders component', () => {
    render(<SubredditsPanel />);
    const subredditsPanel = screen.getByText(/subredditspanel/i);
    expect(subredditsPanel).toBeInTheDocument();
  })
})