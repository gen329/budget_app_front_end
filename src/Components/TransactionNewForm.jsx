import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import TransactionDetails from './TransactionDetails';
const API = import.meta.env.VITE_BASE_URL

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    id: 0,
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    const { id } = event.target;
    setTransaction((prevTransaction => ({ ...prevTransaction, [id]: event.target.value })));
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
      alert(" Transaction was successfully added to the budget!");
      navigate('/transactions');
    } catch (error) {
      console.error(error);
    }
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event)
      addTransaction(transaction);
    };
    
    return (
      <div className="New">
    <form onSubmit={handleSubmit}>

      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        onChange={handleTextChange}
        placeholder="date"
        required
        />
      <br />
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        placeholder="name"
        onChange={handleTextChange}
        />
      <br />
      <label htmlFor="amount">Amount:</label>
      <input
        id="amount"
        type="number"
        placeholder="amount"
        onChange={handleTextChange}
        />
      <br />
      <label htmlFor="from">From:</label>
      <input
        id="from"
        type="text"
        onChange={handleTextChange}
        />
      <br />
      <label htmlFor="category">Category:</label>
      <input
        id="category"
        type="text"
        onChange={handleTextChange}
        />
      <input type="submit" />
    </form>
  </div>
);
};


export default TransactionNewForm;
