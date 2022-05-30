import React from 'react';

function IncomeItem({ income, index, removeIncome }) {

  let date = new Date(income.date);

  const removeHandle = i => {
      removeIncome(i);
  }

  return (
    <div className='income-item'>
        <button className='remove-item' onClick={() => removeHandle(index)}>x</button>
        <div className='desc'>{income.desc}</div>
        <div className='price'>{income.price}zł</div>
        <div className='date'>{date.toLocaleDateString()}</div>
    </div>
  )
}

export default IncomeItem;