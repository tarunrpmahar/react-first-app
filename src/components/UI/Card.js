import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;

    return <div className = {classes}>{props.children}</div>
}

export default Card;

//props.children here children is reserved word
//this bring whole elements inside card tag in expenseitem.js and places it between card div

