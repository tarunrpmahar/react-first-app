import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    //Card is custom tag here hence we need to define classname
    <Card className='expense-item'>
      {/* <ExpenseDate></ExpenseDate> or because there is no content between opening and closing tag so we can use self closing tag*/} 
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
