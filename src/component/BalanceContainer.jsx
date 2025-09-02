import React from 'react'
import CurrentItem from './CurrentItem';

function BalanceContainer(props){

    let income=0;
    let expenses=0;

    props.expense.forEach((item)=>{
        if(item.amount > 0){
            income += parseInt (item.amount);
        }
        else{
            expenses += parseInt (item.amount);
        }
    });
    console.log(income, expenses);
    return(
        <div className='balance-container'>
            <CurrentItem title= "INCOME" amount={income} type="income" />
            <CurrentItem title= "EXPENSE" amount={expenses} type="expense" />
            <CurrentItem title= "BALANCE" amount={income+expenses} type="balance" />
        </div>
    )
}
export default BalanceContainer