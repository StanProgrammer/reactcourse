import React from 'react';
import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>  
      <ExpenseDetails amount={props.amount} location={props.location} title={props.title}/>
    </Card>
  );
}

export default ExpenseItem;
