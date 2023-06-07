import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredtitle,setEnteredTitle]=useState('')
  const [enteredAmount,setEnteredAmount]=useState('')
  const [enteredDate,setEnteredDate]=useState('')

  const changeTitle=(event) => {
    setEnteredTitle(event.target.value)
  }
  const changeAmount=(event) => {
    setEnteredAmount(event.target.value)
  }
  const changeDate=(event) => {
    setEnteredDate(event.target.value)
  }
  // const enteredtitle=(event)=>{
  //   console.log(event.target.value);
  // }
  // const enteredAmount=(event)=>{
  //   console.log(event.target.value);
  // }
  // const enteredDate=(event)=>{
  //   console.log(event.target.value);
  // }
  return (
    
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control' >
          <label>Title</label>
          <input type='text' onChange={changeTitle}/>
        </div>
        <div className='new-expense__control' >
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={changeAmount}/>
        </div>
        <div className='new-expense__control' >
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={changeDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;