import React from 'react';
import {MdDeleteForever} from 'react-icons/md';

function IncomeItem({ income, index, removeIncome }) {

  let date = new Date(income.date);

  const removeHandle = i => {
      removeIncome(i);
  }

  return (
    <div className='income-item'>
        <button className='remove-item' onClick={() => removeHandle(index)}>
          <MdDeleteForever size='1.6em' />
        </button>
        <div className='desc'>{income.desc}</div>
        <div className='price'>{income.price}zł</div>
        <div className='date'>{date.toLocaleDateString()}</div>
    </div>
  )
}

export default IncomeItem;