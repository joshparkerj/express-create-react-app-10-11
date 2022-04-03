import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  render(<App />);
  const fab = screen.getByText(/fab app/i);
  expect(fab).toBeInTheDocument();
});
