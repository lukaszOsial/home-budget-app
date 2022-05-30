import React from 'react';

function ExpensesItem({ expenses, index, removeExpenses }) {

  let date = new Date(expenses.date);

  const removeHandle = i => {
      removeExpenses(i);
  }

  return (
    <div className='expenses-item'>
        <button className='remove-item' onClick={() => removeHandle(index)}>x</button>
        <div className='desc'>{expenses.desc}</div>
        <div className='price'>{expenses.price}zł</div>
        <div className='date'>{date.toLocaleDateString()}</div>
    </div>
  )
}

export default ExpensesItem;