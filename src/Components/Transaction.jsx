import { Link } from "react-router-dom";


function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>
        <Link to={`/transactions/${index}`}>TRANSACTION</Link>
      </td>
    </tr>
  );
}

export default Transaction;