import React from 'react';
import './Card.css';

const Card = (props) => {
    function onClickDelete() {
        props.onDeleteItem((props.index - 1), props.card);
    }
    
    return (
        <div className="Card">
             <button type="button" onClick={() => onClickDelete()}>delete</button>
             <h3>{props.allCards[`${props.card}`].title}</h3>
             <p>{props.allCards[`${props.card}`].content}</p>
        </div>
    )
}

export default Card
