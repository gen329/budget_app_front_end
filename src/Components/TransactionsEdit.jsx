import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;


function TransactionsEdit() {
  let { index } = useParams();

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

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
    .then(response => response.json)
    .then(transaction => {
      console.log(transaction)
      setTransaction(transaction)
    })
    .catch(() => navigate("/not-found"))
  }, [index, navigate]);

  const updateTransaction = () => {
    const httpOptions = {
      "method" : "PUT",
      "body" : JSON.stringify(transaction),
      "headers" : {
        "Content-type" : "application/json"
      }
    }

      fetch(`${API}/transactions/${index}`, httpOptions)
        .then(() => {
          alert(`${transaction.item_name} has been updated!`);
          navigate(`/transactions/${index}`)
        })
        .catch((error) => console.error(error))
  }
  const handleSubmit = event => {
    event.preventDefault();
    updateTransaction();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Transaction"
          required
          />
          <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
};


export default TransactionsEdit;
