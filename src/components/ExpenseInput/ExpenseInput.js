import React from "react";
import "./ExpenseInput.css";
import ExpenseForm from "./ExpenseForm";

const ExpenseInput = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random().toString()*99),
    };
    props.onAddExpense(expenseData)
    // console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default ExpenseInput;
