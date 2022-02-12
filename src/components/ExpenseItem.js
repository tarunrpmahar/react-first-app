import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    //Card is custom tag here hence we need to define classname
    <Card className='expense-item'>
      {/* <ExpenseDate></ExpenseDate> or because there is no content between opening and closing tag*/} 
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
