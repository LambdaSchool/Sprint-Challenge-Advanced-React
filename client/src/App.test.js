import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import Player from './component/Player';
import useDarkMode from './hooks/useDarkMode';
import { useFetchPlayers } from './hooks/useFetchPlayers';

it('Renders App without crashing', () => {
  render(<App />);
});
