import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseDetails=(props)=> {
  const clickHandler=()=>{
    console.log('Clicked!');
  }
  const deleteExpense=()=>{
    console.log('hi');
  }
  return (
    <Card className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>Change title</button>
      <button onClick={deleteExpense}>delete expense</button>
    </Card>
    
  );
}

export default ExpenseDetails;
