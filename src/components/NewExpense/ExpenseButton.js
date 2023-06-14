import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const ExpenseButton = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const handleClick = () => {
    setShowExpenseForm(true);
  };

  return (
    <div className='new-expense'>
      {!showExpenseForm && (
        <div className='new-expense__actions'>
          <button type='button' onClick={handleClick} className='new-expense__button'>
            Add New Expense
          </button>
        </div>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={props.onSaveExpenseData}
          onCancel={() => setShowExpenseForm(false)}
        />
      )}
    </div>
  );
};

export default ExpenseButton;
