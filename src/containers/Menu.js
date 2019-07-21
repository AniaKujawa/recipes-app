import React from 'react';
import '../styles/Menu.scss';
import  {Link} from 'react-router-dom';


export const Menu = () => {
    return (
      <section className="menu">
        <Link className="menu-item" to="/">
          Polecane
        </Link>
        <Link className="menu-item" to="/">
          Blog
        </Link>
        <Link className="menu-item" to="/">
          Ustawienia
        </Link>
        <Link className="menu-item" to="/">
          Zaloguj
        </Link>
      </section>
    );
}

export default Menu;