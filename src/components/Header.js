import React from 'react';

function Header({totalIncome}) {
  return (
    <header>
        <h1>Przychody</h1>
        <div className='total-income'>{totalIncome}zł</div>
    </header>
  )
}

export default Header;