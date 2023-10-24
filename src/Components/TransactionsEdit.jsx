import { useState, useEffect } from "react";
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
      .then((response) => response.json)
      .then((transaction) => {
        console.log(transaction);
        setTransaction(transaction);
      })
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);

  const updateTransaction = () => {
    const httpOptions = {
      method: "PUT",
      body: JSON.stringify(transaction),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/transactions/${index}`, httpOptions)
      .then(() => {
        alert(`${transaction.item_name} has been updated!`);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.error(error));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={transaction.item_name}
          placeholder="Name"
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="Date"
          required
        />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={transaction.amount}
          placeholder="Amount"
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.transaction_from}
          placeholder="Company Name"
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="from">Categore:</label>
        <input
          id="from"
          type="text"
          value={transaction.category}
          placeholder="Category"
          onChange={handleTextChange}
          required
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TransactionsEdit;
