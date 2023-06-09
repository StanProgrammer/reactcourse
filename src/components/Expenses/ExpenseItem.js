import React from 'react';
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem=(props)=> {
  
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>  
      <ExpenseDetails amount={props.amount} location={props.location} title={props.title}/>
    </Card>
    </li>
  );
}

export default ExpenseItem;
