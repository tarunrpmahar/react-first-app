import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  //using it we can update the state of any variables like title 
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  //------
  //let title = props.title;

  //Event Listner
  // function clickHandler() {}
  const clickHandler = () => {
      setTitle('Updated!');
      console.log(title);
  };

  return (
    //Card is custom tag here hence we need to define classname
    <Card className='expense-item'>
      {/* <ExpenseDate></ExpenseDate> or because there is no content between opening and closing tag so we can use self closing tag*/} 
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/* <button onClick={() => {console.log('Clicked!');}}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
