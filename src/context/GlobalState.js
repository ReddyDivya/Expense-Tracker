//Context API
//This is a smaller application. so, maintaining only 1 global state & global reducer
import { createContext, useReducer } from "react";
import AppReducer from './AppReducer';//AppReducer

//initial state
const initialState = {
    //for amount [expense has negative number & income has positive number]
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 },
    ]
}

//create global context using createContext
//GlobalContext used to pass state to other components
export const GlobalContext = createContext(initialState);//initialState is passed; 

//create Provider component - we need to wrap all components in a provider to access global 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //dispatch & state are used in case of user action & those come from useReducer
    //useReducer(AppReducer, initialState); - takes initial state & app reducer

    //Action
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'INSERT_TRANSACTION',
            payload: transaction
        });
    }

    return (
        //value is an object, state.transactions is used to access above transactions array
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children} {/*children will be whatever we will wrap inside*/}
        </GlobalContext.Provider>
    );
}

