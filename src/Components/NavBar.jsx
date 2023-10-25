import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <nav className="nav">

      <button>
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}