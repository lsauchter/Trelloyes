import React from 'react';
import './App.css';
import List from './List.js';

function App(props) {
  const list = props.store.lists.map(listItem => {
    console.log(listItem);
    return <List props={listItem} key={listItem.id}></List>
  })
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {list}
      </div>
    </main>
  );
}

export default App;
