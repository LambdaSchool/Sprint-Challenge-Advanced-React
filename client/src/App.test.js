import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './navBar';
import {render, fireEvent} from '@testing-library/react'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test(`renders without crashing`, () => {
  render(<App/>);
})

test(`Displays Nav`,()=>{
const nav = render(<Nav/>);
nav.getByText("Womens Soccer Team");
nav.getByText('Dark');

});
