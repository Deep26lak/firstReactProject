import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import "./NewExpense.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const NewExpense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default NewExpense;
