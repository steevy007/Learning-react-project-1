import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const data = props.expenses;
  const [filterYear, setFilterYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterArray = data.filter((el) => {
    return el.date.getFullYear().toString() === filterYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filterArray}/>
        <ExpensesList extenses={filterArray}/>
      </Card>
    </div>
  );
};

export default Expenses;
