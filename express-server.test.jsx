import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import expressServer from './express-server';
import App from './src/App';

import randomGibberish from './random-gibberish';

let expressServerInstance;
let user;

beforeAll(async () => {
  expressServerInstance = await expressServer();
  user = userEvent.setup();
});

afterAll(() => {
  expressServerInstance.close();
});

it('can save and load a color', async () => {
  render(<App />);

  const colorInput = screen.getByLabelText('color');
  expect(colorInput).toBeInTheDocument();

  const colorName = `chartreuse ${randomGibberish()}`;

  await user.click(colorInput);
  await user.type(colorInput, colorName);
  const saveButton = screen.getByText('save');
  expect(saveButton).toBeInTheDocument();

  await user.click(saveButton);

  const loadButton = screen.getByText('load');
  expect(loadButton).toBeInTheDocument();

  await user.click(loadButton);
  const color = await screen.findByText(`color ${colorName}`);
  expect(color).toBeInTheDocument();
});
