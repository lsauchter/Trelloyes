import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component Test', () => {
const STORE = {
  lists: [
    {
      id: '1',
      header: 'First list',
      cardIds: ['a'],
    }
  ]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={STORE}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

})
