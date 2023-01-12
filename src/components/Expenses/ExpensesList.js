import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';
const  ExpensesList=(props)=> {
    
    if(props.extenses.length===0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

  return(
    <ul className='expenses-list'>
        {
            props.extenses.map((value, key) => {
                return (
                  <ExpenseItem
                    key={key}
                    title={value.title}
                    date={value.date}
                    amount={value.amount}
                  />
                );
              })
        }
    </ul>
  )
}

export default ExpensesList