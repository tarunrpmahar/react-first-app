import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* <ExpenseDate></ExpenseDate> or because there is no content between opening and closing tag*/} 
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
