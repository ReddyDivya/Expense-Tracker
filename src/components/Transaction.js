import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';//GlobalContext

const Transaction = ({ trnx }) => {
    // const context = useContext(GlobalContext);//useContext used to get data from Global Context
    const { deleteTransaction } = useContext(GlobalContext);//useContext used to get data from Global Context
    //{deleteTransaction} is a destructuring method

    const sign = trnx.amount < 0 ? '-' : '+';

    return (
        <li className={trnx.amount < 0 ? 'minus' : 'plus'}>
            {trnx.text} <span> {sign}${Math.abs(trnx.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(trnx.id)}>x</button>
        </li>
    )
}

export default Transaction;
