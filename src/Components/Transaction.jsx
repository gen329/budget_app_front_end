import { Link } from "react-router-dom";


function Transaction({ transaction, index }) {
  return (
    <tr className="alltransactions">
      <td>
        <Link to={`/transactions/${index}`}>
          <br />
          DATE:{transaction.date}
          <br />
          NAME:{transaction.item_name}
          <br />
          AMOUNT:{transaction.amount}
        </Link>
      </td>
    </tr>
  );
}

export default Transaction;