import React from "react";
import { screen, render } from '@testing-library/react';
import { MainPanel } from './MainPanel';

describe('MainPanel', () => {
  it('renders component', () => {
    render(<MainPanel />);
    const mainPanel = screen.getByText(/mainpanel/i);
    expect(mainPanel).toBeInTheDocument();
  })
})