import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import TransactionDetails from './TransactionDetails';
const API = import.meta.env.VITE_BASE_URL

function TransactionNewForm({index}) {
  console.log(API);
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
    } catch (error) {
      console.error(error);
    }
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      addTransaction(transaction);
      navigate('/transactions/receipt');
    };

  return (
    <div className="newtransaction">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input id="date" type="date" value={transaction.date} onChange={handleTextChange} placeholder="date" required />
        <br />
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={transaction.name} placeholder="name" onChange={handleTextChange} required/>
        <br />
        <label htmlFor="amount">Amount:</label>
        <input id="amount" type="number" value={transaction.amount} placeholder="amount" onChange={handleTextChange} required />
        <br />
        <label htmlFor="from">From:</label>
        <input id="from" type="text" value={transaction.from} placeholder="company name" onChange={handleTextChange} required/>
        <br />
        <label htmlFor="category">Category:</label>
        <input id="category" type="text" value={transaction.category} onChange={handleTextChange} required/>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TransactionNewForm;
