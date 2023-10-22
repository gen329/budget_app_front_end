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

    const navigte = useNavigate();
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.item_name}
          type="text"
          onChange= { handleTextChange }
          placeholder="Name of Transaction"
          required/>
          <input type="submit" />
      </form>
    </div>
  );
};

export default TransactionNewForm;
