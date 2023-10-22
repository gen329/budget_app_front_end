import { useState, useEffect } from "react";
const API = import.meta.env.VITE_BASE_URL 

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch(`${API}/transactions`) 
    .then((response) => response.json())
    .then( transactions => setTransactions(transactions))
    .catch( error => console.error(error));
  }, []);
  
  return(
    <div className="Transactions">
    <section>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Take me there</th>
            <th>See this transaction</th>
          </tr>
        </thead>
        <tbody>
           {transactions.map((transaction, index) => {
             return <Transactions key={index} transactions={transaction} index={index} />;
            })}
        </tbody>
      </table>
    </section>
  </div>
);
}

export default Transactions;

