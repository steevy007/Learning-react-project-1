import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense=(props)=>{
    const [showForm, setShowForm] = useState(false);
    const saveExpendDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }
    const showFormView = () => {
        setShowForm(true);
      };
    
      const cancleAdd = () => {
        setShowForm(false);
      };

    return(
        <div className='new-expense'>
            {!showForm && <button type="button" onClick={showFormView}>Add Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpendDataHandler} cancleAdd={cancleAdd} />}
        </div>
    )
}


export default NewExpense