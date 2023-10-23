import { Link } from "react-router-dom";


function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.name}
         {transaction.category} 
         {transaction.amount}
         {transaction.from}
         {transaction.date}
         </Link>
      </td>
    </tr>
  );
}

export default Transaction;