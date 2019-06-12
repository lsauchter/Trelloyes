import React from 'react';
import './List.css'; 
import Card from './Card.js';       

const List = (props) => {
    const listItems = props.props.cardIds.map(card => {
        return <Card props={card} key={props.props.id + card}></Card>;
        });
    const { header } = props.props;
    return (
    <section className="List">
        <header className="List-header">
            <h2>{header}</h2>
        </header>
        <div className="List-cards">
            {listItems}
            <button type="button" className="List-add-button">
              + Add Random Card
            </button>
        </div>
    </section>
    )
}

export default List
