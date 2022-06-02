import React, { useState, useEffect } from "react";
import HeaderSum from './components/HeaderSum';
import HeaderIncome from './components/Income/HeaderIncome';
import HeaderExpenses from './components/Expenses/HeaderExpenses';
import IncomeForm from "./components/Income/IncomeForm";
import IncomeList from "./components/Income/IncomeList";
import ExpensesForm from "./components/Expenses/ExpensesForm";
import ExpensesList from "./components/Expenses/ExpensesList";
import Footer from "./components/Footer";

function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    let temp = 0;
    for(let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    setTotalIncome(temp);
  }, [income]);

  useEffect(() => {
    let temp = 0;
    for(let i = 0; i < expenses.length; i++) {
      temp += parseInt(expenses[i].price);
    }
    setTotalExpenses(temp);
  }, [expenses]);

  useEffect(() => {
    let balance = totalIncome - totalExpenses;
    setTotalSum(balance);
  });
  
  return (
    <div className="App">
      <h1>Domowy budżet</h1>
      <HeaderSum totalSum={totalSum} />
      <HeaderIncome totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <IncomeList income={income} setIncome={setIncome} />
      <HeaderExpenses totalExpenses={totalExpenses} />
      <ExpensesForm expenses={expenses} setExpenses={setExpenses} />
      <ExpensesList expenses={expenses} setExpenses={setExpenses} />
      <Footer />
    </div>
  );
}

export default App;
