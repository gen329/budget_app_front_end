import { Link } from "react-router-dom";


function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>
        <Link to={`/transactions/${index}`}>
        <br />
         {transaction.date}
         {transaction.category} 
         {transaction.amount}
         {transaction.from}
         {transaction.id}
         </Link>
      </td>
    </tr>
  );
}

export default Transaction;