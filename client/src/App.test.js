import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('App renders without crashing', () => {
    render(<App />);
});

test('Header shows up', () => {
 const {getByText} = render(<App />);

  const header = getByText(/Player searches/);

  expect(header).toBeInTheDocument()

})