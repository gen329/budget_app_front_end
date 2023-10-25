import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState({
    name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });
  let { index } = useParams();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
      .then((response) => {
        if (!response.ok) {
          throw new Erorr("Response was unsuccessful");
        }
        return response.json();
      })
      .then((transaction) => {
        setTransaction(transaction);
        setLoading(false);
      })
      .catch(() => navigate("/notfound"));
  }, [index, navigate]);

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };

    fetch(`${API}/transactions/${index}`, httpOptions)
      .then((response) => {
        if (response.ok) {
          alert("Transaction successfully deleted!");
          navigate("/transactions");
        } else {
          throw new Error("Response was unsuccessful");
        }
      })
      .catch((err) => console.err(err));
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <p>
        Name: {transaction.item_name}
        <br />
        Amount: {transaction.amount}
        <br />
        Date: {transaction.date}
        <br />
        From: {transaction.transaction_from}
        <br />
        Category: {transaction.category}
      </p>
      <br />
      <div className="showNavigation">
        <div>
          <br />
          <Link to={`/transactions`}>
            <button>BACK</button>
          </Link>
        </div>
        <div>
          <br />
          <Link to={`/transactions/${index}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
        <div>
          <br />
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;
