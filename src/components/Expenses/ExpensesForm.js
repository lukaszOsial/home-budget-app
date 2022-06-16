import React, { useRef } from 'react';

function ExpensesForm({expenses, setExpenses}) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddExpense = event => {
    event.preventDefault();

    let d = date.current.value.split("-");
    let newDate = new Date(d[0], d[1], d[2]);

    setExpenses([...expenses, {
      "desc": desc.current.value,
      "price": price.current.value,
      "date": newDate.getTime()
    }]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  }

  return (
    <form className='expenses-form' onSubmit={AddExpense}>
        <div className='form-inner'>
            <input type='text' name='desc' id='desc' placeholder='Nazwa wydatku' ref={desc} required/>
            <input type='number' name='price' id='price' placeholder='Kwota' ref={price} required/>
            <input type='date' name='date' id='date' placeholder='data wydatku' ref={date} required/>
            <input type='submit' value='Dodaj' />
        </div>
    </form>
  )
}

export default ExpensesForm;