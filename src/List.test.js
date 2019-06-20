import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';

describe('List Component Test', () => {
    const STORE = {
        listItem:
          {
            id: '1',
            header: 'First list',
            cardIds: ['a', 'b'],
          }
      };

    it('Renders in the UI', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List props={STORE} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})