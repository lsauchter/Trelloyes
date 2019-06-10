import React from 'react';
import './List.css'; 
import Card from './Card.js';       

const List = (props) => {
    const listItems = <Card props={props.props.cardIds}></Card>;
    const { header } = props.props;
    return (
    <section className="List">
        <header className="List-header">
            <h2>{header}</h2>
        </header>
        <div className="List-cards">
            {listItems}
        </div>
    </section>
    )
}

export default List
