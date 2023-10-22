import { useState, useEffect } from "react";
import { Link, useParams, useNavigation } from "react";
const API = import.meta.env.VITE_BASE_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigation();

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
    const httpOptions = { "method" : "DELETE" }

    fetch(`${API}/transactions/${index}`, httpOptions)
      .then((response) => {
        console.log(response)
        alert("Transaction successfully deleted!");
        navigate("/transactions");
      })
      .catch((err) => console.error(err))
  };
  return (
    <article>
      <h3>
        {transaction.isFavorite ? <span>⭐️</span> : null} {transaction.name}
      </h3>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to ={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}><Delete></Delete></button>
        </div>
      </div>
    </article>
  );
}



export default TransactionDetails;