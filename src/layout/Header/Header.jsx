import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Distribuidora JF
        </Link>

        <nav className="nav">
          <Link to="/">Inicio</Link>

          <Link to="/catalog">
            Catálogo
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;