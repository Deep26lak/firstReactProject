import "./ExpenseItem.css";

function ExpenseItem(data) {
//   const expenseDate = new Date();
//   const expenseTitle = "Car Insurance";
//   const expensePrice = 293.43;
  return (
    <div className="expense-item ">
      <p>{data.date.toISOString()}</p>
      <div className="expense-item__description">
        <h1 className="expense-item h1">{data.title}</h1>
        <p className="expense-item__price">${data.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
