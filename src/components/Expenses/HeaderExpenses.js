import React from 'react';

function HeaderExpenses({totalExpenses}) {
  return (
    <header>
        <h2>Wydatki</h2>
        <div className='total-expenses'>{totalExpenses}zł</div>
    </header>
  )
}

export default HeaderExpenses;