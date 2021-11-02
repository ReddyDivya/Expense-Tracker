import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';//GlobalContext

const AddTransaction = () => {
    // need to maintain state of every input i.e Text & Amount
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    // const context = useContext(GlobalContext);//useContext used to get data from Global Context
    const { addTransaction } = useContext(GlobalContext);//useContext used to get data from Global Context
    //{addTransaction} is a destructuring method

    const onSubmitHndlr = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmitHndlr}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <input type="submit" value="Add Transaction" className="btn" />
            </form>
        </>
    )
}

export default AddTransaction

