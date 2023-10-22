import { useState } from 'react';
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
      setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };
    const addTransaction = () => {
      const httpOptions = {
        "method" : "POST",
        "body" : JSON.stringify(transaction),
        "headers" : {
          "Content-type" : "application/json"
        }
      }
      fetch(`${API}/transactions`, httpOptions)
        .then((response) => {
          console.log(response)
          alert(`${transaction.item_name} was added to the budget!`)
          navigate('/transactions');
        })
        .catch((error) => console.error(error))
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      addTransaction();
    };
    return (
    <div className="New">
      <form onSubmit={handleSubmit}>
     
      <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="number"
          onChange={ handleTextChange }
          placeholder="date"
          required
        />

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={transaction.item_name}
          placeholder="name"
          onChange={handleTextChange}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={transaction.amount}
          placeholder="amount"
          onChange={handleTextChange}
        />

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
