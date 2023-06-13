import React from "react"
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
const ExpenseList = (props)=>{
    let expenseContent = props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))
    if(props.items.length===0){
        return <h2 className="expense-list__fallback">No expenses found</h2>
    }
    
  
      if (props.items.length === 1) {
        expenseContent.push(
          <p key="message">Only one expense found. Please add more expenses.</p>
        );
      }
    
    return(
        <ul className="expenses-list">
        {expenseContent}
        </ul>
    )
}

export default ExpenseList