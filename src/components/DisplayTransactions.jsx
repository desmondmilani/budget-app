import React from "react";
import "../css/DisplayTransaction.css";
import Unique from "../unique";

const DisplayTransactions = ({ transactions }) => {
    let u = new Unique();
    return (
        <div className="DisplayTransactions">
            {
                transactions.map(transaction => (
                    <div key={u.generate()}>
                        <h1>{transaction.item}</h1>
                        <h1>{transaction.amount}</h1>
                        <h1 className={transaction.transactionType === "income" ? "green" : "red"}></h1>
                    </div>    
                ))
            }

        </div>
    )
}


export default DisplayTransactions;