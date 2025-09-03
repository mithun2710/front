import React, { useEffect, useState } from 'react'
import Form from './form'
import {v4 as uid} from 'uuid'
import History from './History.jsx'
import BalanceContainer from './BalanceContainer.jsx'

function ExpenseContainer(){

  
    const [expense, setExpense] = useState([])

    async function addExpense(title, amount) {
        try {
            const newExpense =await fetch("https://back-1-2gtw.onrender.com/post", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ title, amount })
    });
        } catch (error) {
            console.log(error)
        }
    

    const data = await newExpense.json();
    console.log("Server response:", data);
    getExpenses();
}

async function getExpenses(){
    const response = await fetch("hhttps://back-1-2gtw.onrender.com/expenses");
    const data = await response.json();
    setExpense(data.expenses);
}

useEffect(() => {
    getExpenses();
  }, [])

    async function deleteExpense(id){
        await fetch(`https://back-1-2gtw.onrender.com/delete/${id}`,{
            method:"DELETE"
        });
        getExpenses();
    }
    return(
        <div className='expense-container'>
            <h1 className='topic'>Expense tracker</h1>
            <BalanceContainer expense={expense}/>
            <Form addExpense={addExpense}/>
            <History expense={expense} deleteExpense={deleteExpense}/>

        </div>
    )
}

export default ExpenseContainer