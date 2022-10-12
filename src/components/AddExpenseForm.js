import React, { useState } from "react";
import { useSelector } from "react-redux";

const buttonStyle = {
    margin: '20px 10px',
    cursor: 'pointer',
    fontWeight: '500',
    padding: '13px 25px',
    borderRadius: '15px',
    fontSize: '0.8rem',
    border: 'none',
    color: 'white',
    background: '#1d96b2',
    transition: 'all 0.25s ease'
}

export const AddExpenseForm = ({ onSubmit }) => {
  const formType = useSelector((state) => state.formType.value);
  const data = useSelector((state) => state.expensesSlice.expenses);
  const selectedId = useSelector((state) => state.expensesSlice.selectedId);
  let selectedData = {};
  if (formType === 'Edit') {
    selectedData = data.find(expense => expense.id === selectedId);
  }
  const [name, setName] = useState(formType === 'Add' ? "" : selectedData?.name);
  const [amount, setAmount] = useState(formType === 'Add' ? "" : selectedData?.amount);
  const [date, setDate] = useState(formType === 'Add' ? "" : selectedData?.date);
  const title = formType === 'Add' ? 'Add Expense' : 'Edit Expense';
  const buttonText = formType === 'Add' ? 'Add Expense' : 'Update Expense';
  return (
    <form onSubmit={(e) => onSubmit(e, selectedData?.id, name, amount, date)}>
      <div className="text-center modal_area mb-5">
        <h3>{title}</h3>
      </div>
      <div className="form-group mt-4">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          id="name"
          placeholder="Expense Type"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="date">Date</label>
        <input
          className="form-control"
          id="date"
          type="date"
          placeholder="Expense Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="amount">Amount</label>
        <input
          className="form-control"
          id="amount"
          type="decimal"
          placeholder="Total Expense Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-group" style={{display: 'flex', justifyContent: 'center'}}>
        <button
          className="add_btn"
          type="submit"
          style={buttonStyle}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;