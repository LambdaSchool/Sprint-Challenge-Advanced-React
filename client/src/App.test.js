import React from 'react';
import App from './App';
import { render } from "@testing-library/react";
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerList from './component/PlayerList';

afterEach(rt1.cleanup);

it("The App renders without crashing", () => {
  rtl.render(<App />);
});

it("Renders Womens World Cup h1", () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/women's world cup/i));
});

it("Players are defined", () => {
  const players = rtl.render(<PlayerList />);
  expect(players).toBeDefined();
  expect(players).not.toBeUndefined();
  expect(players).not.toBeFalsy();
});