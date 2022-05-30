import React from 'react';

function HeaderExpenses({totalExpenses}) {
  return (
    <header>
        <h1>Wydatki</h1>
        <div className='total-expenses'>{totalExpenses}zł</div>
    </header>
  )
}

export default HeaderExpenses;