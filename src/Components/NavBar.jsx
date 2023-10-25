import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <nav className="nav">
      <h1> BUDGET APP </h1>
      <button>
      <Link to="/transactions">HOME</Link>

      </button>
      <button>
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}