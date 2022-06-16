import React, { useRef } from 'react';

function IncomeForm({income, setIncome}) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = event => {
    event.preventDefault();

    let d = date.current.value.split("-");
    let newDate = new Date(d[0], d[1], d[2]);

    setIncome([...income, {
      "desc": desc.current.value,
      "price": price.current.value,
      "date": newDate.getTime()
    }]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  }

  return (
    <form className='income-form' onSubmit={AddIncome}>
        <div className='form-inner'>
            <input type='text' name='desc' id='desc' placeholder='Nazwa przychodu' ref={desc} required/>
            <input type='number' name='price' id='price' placeholder='Kwota' ref={price} required/>
            <input type='date' name='date' id='date' placeholder='' ref={date} required/>
            <input type='submit' value='Dodaj' />
        </div>
    </form>
  )
}

export default IncomeForm;