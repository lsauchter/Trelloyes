import React from 'react';
import './List.css'; 
import Card from './Card.js';       

const List = (props) => {
    const listItems = props.listItem.cardIds.map(card => {
        return <Card card={card} key={props.listItem.id + card} index={props.listItem.id} allCards={props.allCards} onDeleteItem={props.onDeleteItem}></Card>;
        });
    const { header } = props.listItem;
    
    function onClickRandom() {
        props.onRandomItem((props.listItem.id - 1));
    }

    return (
    <section className="List">
        <header className="List-header">
            <h2>{header}</h2>
        </header>
        <div className="List-cards">
            {listItems}
            <button type="button" className="List-add-button" onClick={() => onClickRandom()}>
              + Add Random Card
            </button>
        </div>
    </section>
    )
}

export default List
