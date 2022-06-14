import React, { ReactDom } from 'react';
import { useState } from 'react';
import './App.css';
import Transaction from "./myClasses/Transaction"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from './components/home';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (item, amount, transactionType) => {
    let transaction = new Transaction(item, amount, transactionType);
    setTransactions([...transactions, transaction])
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home addTransaction={addTransaction} transactions={transactions} />} />
      </Routes>
    </Router>
  );
}

export default App;
