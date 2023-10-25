import { Link } from "react-router-dom";


function Transaction({ transaction, index }) {
  return (
    <tr className="alltransactions">
      <td>
        <Link to={`/transactions/${index}`}>
          <br />
          ID:{transaction.id}
          <br />
          DATE:{transaction.date}
          <br />
          NAME:{transaction.item_name}
          <br />
          AMOUNT:{transaction.amount}
          <br />
          FROM:{transaction.transaction_from}
          <br />
          CATEGORY:{transaction.category}
        </Link>
      </td>
    </tr>
  );
}

export default Transaction;