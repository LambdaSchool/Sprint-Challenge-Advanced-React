import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerCard from './components/PlayerCard'
import PlayerCardContent from './components/PlayerCardContent'
import { Item } from 'semantic-ui-react';
afterEach(rtl.cleanup);



test('sample test', () => {
  expect(false).toBeFalsy()
})

// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('App renders withought crashing', () => {
  test("Does App Render?", () => {
    rtl.render(<App />)
  })
})

describe("does player name render", () => {
  test('renders player first and last name', () => {
    const wrapper = rtl.render(<PlayerCardContent />)
    const elem = wrapper.queryAllByText(/alex morgan/i)
  })
})

test('where player is from : of', () => {
  const { container, getByText} = rtl.render(<PlayerCardContent />)
  getByText('of');
})

