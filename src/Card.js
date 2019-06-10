import React from 'react';
import './Card.css';
import STORE from './store.js';

const Card = (props) => {
    return (
        <div className="Card">
             <button type="button">delete</button>
             <h3>{STORE.allCards[`${props.props}`].title}</h3>
             <p>{STORE.allCards[`${props.props}`].content}</p>
        </div>
    )
}

export default Card
