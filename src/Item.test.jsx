import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Item from './Item';

// eslint-disable-next-line no-undef
it('item renders without crashing', () => {
  render(<Item content={{ name: 'Doug Dimmadome', oneEnd: 'Dimmadeath', otherEnd: 'Dimmadisaster' }} />);
  const dimmaDude = screen.getByText(/Doug Dimmadome/i);
  expect(dimmaDude).toBeInTheDocument();
});
