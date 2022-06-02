import React from 'react';

function HeaderSum({totalSum}) {
  return (
    <header>
        <h2>Saldo</h2>
        <div className='total-sum'>{totalSum}zł</div>
    </header>
  )
}

export default HeaderSum;