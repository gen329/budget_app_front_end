import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/transactions/${index}`)
      .then(response => response.json())
      .then(transaction => {
        console.log(transaction, "this is THE transaction")
        setTransaction(transaction)
      })
      .catch(() => navigate("/not found"))
  }, [index, navigate]);

  const handleDelete = () => {
    const httpOptions = { "method": "DELETE" }

    fetch(`${API}/transactions/${index}`, httpOptions)
      .then((response) => {
        alert("Transaction successfully deleted!");
        navigate("/transactions");
      })
      .catch((err) => console.error(err))
  };
  return (
    <article>
        <p>
        Name: {transaction.name}  
        <br />
        Amount: {transaction.amount}
        <br />
        Date: {transaction.date}
        <br />
        From: {transaction.from}
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