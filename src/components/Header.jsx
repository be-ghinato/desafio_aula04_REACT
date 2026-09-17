import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="cabecalho">
      <Link to="/" className="marca">
        Sabor de <span className="til">Caderno</span>
      </Link>

      <nav className="menu">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'ativo' : '')}>
          Início
        </NavLink>
        <NavLink to="/receitas" className={({ isActive }) => (isActive ? 'ativo' : '')}>
          Receitas
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'ativo' : '')}>
          Sobre
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
