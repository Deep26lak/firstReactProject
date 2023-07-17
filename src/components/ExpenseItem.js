import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
//   const expenseDate = new Date();
//   const expenseTitle = "Car Insurance";
//   const expensePrice = 293.43;

  return (
    <div className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1 className="expense-item h1">{props.title}</h1>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
