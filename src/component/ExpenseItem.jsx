import React from "react"


function ExpenseItem(props){
    const {title , amount ,_id }=props.expense
    const type = amount <0 ?"expense":"income"

function handleDelete() {
    if (props.onDelete) {
      props.onDelete(_id);
    }
  }
    return(
        <div className={`expense-item ${type}`}>
            <div className="expense-title">{title}</div>
            <div className="expense-amount">${amount}</div>
            {/* 🔹 Add Delete Button */}
            <button onClick={handleDelete} className="delete-btn">
                Delete
            </button>
        </div>
    )
}
export default ExpenseItem