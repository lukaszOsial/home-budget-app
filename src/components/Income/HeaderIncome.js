import React from 'react';

function HeaderIncome({totalIncome}) {
  return (
    <header>
        <h2>Przychody</h2>
        <div className='total-income'>{totalIncome}zł</div>
    </header>
  )
}

export default HeaderIncome;