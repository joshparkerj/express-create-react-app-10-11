import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

it('app renders without crashing', () => {
  render(<App />);
  const fab = screen.getByText(/fab app/i);
  expect(fab).toBeInTheDocument();
});
