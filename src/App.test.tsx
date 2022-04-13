import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const textElement = screen.getAllByText(/RUN tests/gi)[0];
  expect(textElement).toBeInTheDocument();
});
