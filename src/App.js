import React, { useReducer } from 'react';
import './App.css';
import List from './List.js';

const initialSTORE = {
  lists: [
    {
      id: '1',
      header: 'First list',
      cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
    },
    {
      id: '2',
      header: 'Second list',
      cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
    },
    {
      id: '3',
      header: 'Third list',
      cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
    },
    {
      id: '4',
      header: 'Fourth list',
      cardIds: [ 'l', 'm' ],
    },
  ],
  allCards: {
    'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
    'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
    'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
    'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
    'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
    'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
    'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
    'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
    'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
    'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
    'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
    'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
  },
}

function App() {
  const [store, dispatch] = useReducer(reducer, initialSTORE)
  
  function deleteCard(id, card) {
    dispatch({ type: 'DELETE', listID: id, cardLetter: card });
  }

  function randomCard(id) {
    dispatch({ type: 'RANDOM', listID: id})
  }

  function reducer(store, action) {
      switch(action.type) {
        case 'DELETE':
          const newCardIds = store.lists[action.listID].cardIds.filter((cardId) => cardId !== action.cardLetter);
          store.lists[action.listID].cardIds = newCardIds;
          return {...store}
        case 'RANDOM':
            const id = Math.random().toString(36).substring(2, 4)
            + Math.random().toString(36).substring(2, 4);
            store.allCards[id] = {
              id,
              title: `Random Card ${id}`,
              content: 'lorem ipsum',
            };
            store.lists[action.listID].cardIds.push(id);
          return {...store}
        default:
          throw new Error();
    }
  }

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {store.lists.map(listItem => {
          return <List listItem={listItem} key={listItem.id} allCards={store.allCards} onDeleteItem={deleteCard} onRandomItem={randomCard}></List>
        })}
      </div>
    </main>
  );
}

export default App;
