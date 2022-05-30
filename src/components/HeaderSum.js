import React from 'react';

function HeaderSum({totalSum}) {
  return (
    <header>
        <h1>Saldo</h1>
        <div className='total-sum'>{totalSum}zł</div>
    </header>
  )
}

export default HeaderSum;