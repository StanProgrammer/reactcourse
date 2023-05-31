import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseDetails=(props)=> {
  const [ title, setTitle]=useState(props.title);
  const [ amount, setAmount]=useState(props.amount);
  // let title = props.title;
  const clickHandler=()=>{
   setTitle('Updated');
  }
  const changeAmount=()=>{
    setAmount('100$')
  }
  return (
    <Card className="expense-item__description">
      <h2>{title}</h2>
      <button className='amount1' onClick={changeAmount}>Change Amount</button>
      <button onClick={clickHandler}>Change title</button>
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__price">{amount}</div>
      
      
    </Card>
    
  );
}

export default ExpenseDetails;
