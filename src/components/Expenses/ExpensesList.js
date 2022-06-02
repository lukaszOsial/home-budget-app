import React from 'react';
import ExpensesItem from './ExpensesItem';

function ExpensesList({ expenses, setExpenses }) {

  const removeExpenses = i => {
    let temp = expenses.filter((v, index) => index != i);
    setExpenses(temp);
  }

  const sortByDate = (a, b) => {
      return a.date - b.date;
  }

  return (
    <div className='expenses-list'>
        {
            expenses.sort(sortByDate).map((value, index) => (
                <ExpensesItem 
                    key={index} 
                    expenses={value} 
                    index={index} 
                    removeExpenses={removeExpenses} 
                />
            ))
        }
    </div>
  )
}

export default ExpensesList;