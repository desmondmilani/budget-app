import React, { ReactDOM } from "react";
import { useState } from "react";
import "../css/AddItem.css";
const AddItem = ({ addTransaction }) => {
    const [item, setItem] = useState("");
    const [amount, setAmount] = useState("");
    const [transactionType, setTransactionType] = useState("income");

    const addItem = () => {
        addTransaction(item, amount, transactionType, Math.random() * 1000);
    }

    return (
        <div className="AddItem">
            <input type="text" placeholder="Enter Item" onChange={e=> setItem(e.target.value)} />
            <input type="text" placeholder="Enter Amount" onChange={e=> setAmount(e.target.value)} />
            <select name="" id="" onChange={e=> setTransactionType(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            <button onClick={addItem}>Add</button>
        </div>
    )
}

export default AddItem;