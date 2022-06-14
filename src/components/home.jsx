import React from "react";
import AddItem from "./AddItem";
import DisplayTransactions from "./DisplayTransactions";

const Home = ({ addTransaction, transactions }) => {
    return (

        <div>
            <DisplayTransactions transactions={transactions} />
            <AddItem addTransaction={addTransaction} />
        </div>
        
    )
}

export default Home;