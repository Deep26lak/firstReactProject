import React from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1>{props.title}</h1>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </Card>
  );
};

export default ExpenseItem;
