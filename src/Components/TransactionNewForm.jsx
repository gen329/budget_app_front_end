import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    id: 0,
    item_name: "",
    amount: 0,
    date: "",
    transaction_from: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setTransaction((prevTransaction => ({ ...prevTransaction, [id]: value })));
  };

  const addTransaction = async(transaction) => {
    try {
      const httpOptions = {
        "method": "POST",
        "body": JSON.stringify(transaction),
        "headers": {
          "Content-type": "application/json"
        },
      };

      const response = await fetch(`${API}/transactions`, httpOptions);
      if (!response.ok) { throw new Error("Network response failed!!") }

      const data = await response.json();
      console.log(data);
      alert(`${transaction.item_name} was successfully added to the budget!`);
      navigate('/transactions');
    } catch (error) {
      console.error(error);
    }
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      addTransaction();
    };
    
    console.log(transaction.item_name)
    return (
      <div className="New">
    <form onSubmit={handleSubmit}>

      <label htmlFor="date">Date:</label>
      <input
        id="date"
        value={transaction.date}
        type="text"
        onChange={handleTextChange}
        placeholder="date"
        required
        />
      <br />
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={transaction.item_name}
        placeholder="name"
        onChange={handleTextChange}
        />
      <br />
      <label htmlFor="amount">Amount:</label>
      <input
        id="amount"
        type="number"
        value={transaction.amount}
        placeholder="amount"
        onChange={handleTextChange}
        />
      <br />
      <label htmlFor="from">From:</label>
      <input
        id="from"
        type="text"
        value={transaction.transaction_from}
        onChange={handleTextChange}
        />
      <br />
      <input type="submit" />
    </form>
  </div>
);
};


export default TransactionNewForm;
