import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  
  const [state, setState] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const titleChangeHandle = (event) => {
    setState((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: state.title,
      amount: +state.amount,
      date: new Date(state.date),
    };

    props.onSaveExpenseData(expenseData);

    setState({
      title: "",
      amount: 0,
      date: "",
    });
  };

 

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={titleChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={state.amount}
            name="amount"
            onChange={titleChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={state.date}
            name="date"
            onChange={titleChangeHandle}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="text" onClick={props.cancleAdd}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
