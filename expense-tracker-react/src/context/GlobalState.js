import React, { createContext, useReducer} from "react";
import AppReducer from './AppReducer';
import { Transaction } from "../components/Transaction";

// initial state
const initialState = {
    transactions: [
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//Provider component wraps all components from app.js
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

//Actions
function addTransaction(id) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: Transaction
    });
}

return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
    </GlobalContext.Provider>);
}