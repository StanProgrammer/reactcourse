import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import "../src/components/Expenses/Expense.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import ExpenseList from "./components/Expenses/ExpenseList";
import ExpenseButton from "./components/NewExpense/ExpenseButton";
import ExpenseChart from "./components/Expenses/ExpensesChart";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Pune",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Mumbai",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Bangalore",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Delhi",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [selectedYear, setSelectedYear] = useState("all");

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterExpenses = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  let filteredExpenses = expenses;
  if (selectedYear !== "all") {
    filteredExpenses = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      <ExpenseButton onSaveExpenseData={addExpenseHandler}/>
      <Card className="expenses">
        <ExpenseFilter onFilter={filterExpenses} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default App;
