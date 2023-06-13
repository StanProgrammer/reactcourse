import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({ onFilter }) => {
  const yearChangeHandler = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
      <h1>Filter by year</h1>
      <select onChange={yearChangeHandler}>
        <option value="all">All</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
       
      </select>
    </div>
    </div>
  );
};

export default ExpenseFilter;
