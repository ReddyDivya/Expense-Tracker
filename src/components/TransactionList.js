import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';//GlobalContext

const TransactionList = () => {
    // const context = useContext(GlobalContext);//useContext used to get data from Global Context
    const { transactions } = useContext(GlobalContext);//useContext used to get data from Global Context
    //{transactions} is a destructuring method

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(transaction => <Transaction key={transaction.id} trnx={transaction} />)
                }

            </ul>
        </>
    )
}
export default TransactionList
