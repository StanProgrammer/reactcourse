import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseForm = () => {
    const OnChangeval=(e)=>{
        console.log(e.target.value);
    }
  return (
    <form>
      <div>
        <input type='text' placeholder='Expense Title' onChange={OnChangeval} />
      </div>
      <div>
        <input type='text' placeholder='Expense Amount' onChange={OnChangeval}/>
      </div>
      <div>
        <input type='text' placeholder='Expense Date' onChange={OnChangeval}/>
      </div>
      <div>
        <input type='submit' value='Submit' />
      </div>
    </form>
  );
};

export default ExpenseForm;
