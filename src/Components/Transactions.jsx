import { useState, useEffect } from "react";
const API = import.meta.env.VITE_BASE_URL 

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch(`${API}/transactions`) 
    .then((res) => {
      return response.json();
      // console.log(res.body);
    })
    .then((responseJSON) => setTransactions(responseJSON))
    .catch((error) => console.error(error));
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

