import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title,setTitle]=useState(props.title)  // use of useState hook , it alwayes return a array with two values first one is provided value and the second one updated value !!!


  const clickhandler = () => {
    setTitle("updated!!") // seting updated value to second element of use state array
  };
  console.log("Expense item rendered just NOW !!!!");

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1>{title}</h1>
        <p className="expense-item__price">${props.amount}</p>
      </div>
      <button onClick={clickhandler}>click here</button> 
    </Card>
  );
};

export default ExpenseItem;
