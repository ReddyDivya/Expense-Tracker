import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';//GlobalContext

const Balance = () => {

    // const context = useContext(GlobalContext);//useContext used to get data from Global Context
    const { transactions } = useContext(GlobalContext);//useContext used to get data from Global Context
    //{transactions} is a destructuring method

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc + item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Balance;

