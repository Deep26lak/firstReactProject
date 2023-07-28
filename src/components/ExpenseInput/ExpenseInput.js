import React, { useState } from "react";
import "./ExpenseInput.css";
import ExpenseForm from "./ExpenseForm";

const ExpenseInput = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const onCancelHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random().toString() * 99),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
    // console.log(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default ExpenseInput;
