import { useState, useEffect } from "react";
import Transaction from "./Transaction";
const API = import.meta.env.VITE_BASE_URL 

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`) 
    .then((response) => {
      if ((!response.ok)) {
        throw new Error('Network response failed!')
      }
     return response.json();
    })
    .then((transactions) => setTransactions(transactions))
    .catch( error => console.error(error, "ERROR!!!"));
  }, []);

  
  return(
    <div className="Transactions">
    <section>
      <table>
        <tbody>
           {transactions.map((transaction, index) => {
             return <Transaction key={index} transaction={transaction} index={index} />;
            })}
        </tbody>
      </table>
    </section>
  </div>
);
}

export default Transactions;

