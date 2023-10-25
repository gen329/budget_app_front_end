import React, {useEffect, useState} from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const TransactionReceipt = () => {
  const [transaction, setTransaction] = useState({
    name: "",
    amount: 0,
    date: "",
    from: "",
    category: ""
  });
  const [loading, setLoading] = useState(true);

  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/transactions/`)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Erorr("Response was unsuccessful")
        }
        return response.json();
      })
      .then(transaction => {
        setTransaction(transaction[transaction.length -1]);
        setLoading(false);
      })
      .catch(() => navigate("/notfound"));
  }, [index, navigate]);
console.log(transaction[transaction.length -1]);
  return (
    <article className="receipt">
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
  )
}

export default TransactionReceipt