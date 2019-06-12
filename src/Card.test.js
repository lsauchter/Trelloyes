import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import STORE from './store.js';

describe('Card Component Test', () => {
    it('Renders in the UI', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card props={STORE.lists[0].cardIds[0]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})