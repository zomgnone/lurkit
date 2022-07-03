import React from "react";
import { screen, render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders component', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })
})