import React, { ReactDom } from 'react';
import { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Transaction from "./myClasses/Transaction"
import DisplayTransactions from './components/DisplayTransactions';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (item, amount, transactionType) => {
    let transaction = new Transaction(item, amount, transactionType);
    setTransactions([...transactions, transaction])
  }
  return (
    <div className="Container">
      <DisplayTransactions transactions = {transactions} />
      <AddItem addTransaction={addTransaction} />
    </div>
  );
}

export default App;
