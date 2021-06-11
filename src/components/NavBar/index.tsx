import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="life__navbar__Container">
      <h1 className="life__brand__Logo">
        <Link to="/">Life</Link>
      </h1>
      <h2 className="life__brand__title">
        Controle <br />
        de Caixa
      </h2>
      <ul className="life__navBar">
        <li className="life__navItem">
          <Link to="/" className="life__navLink">
            Início
          </Link>
        </li>
        <li className="life__navItem">
          <Link to="/registers" className="life__navLink">
            Registros
          </Link>
        </li>
        <li className="life__navItem">
          <Link to="/users" className="life__navLink">
            Usuário
          </Link>
        </li>
        <li className="life__navItem">
          <Link to="/logout" className="life__navLink">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
