/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from 'react-router-dom';
import './layout.css';

export default function Layout() {
  return (
    <div className="panel-bg">
      <header>
        <nav className="nav-bar">
          <a className="nav-brand" href="#/">Bookstore</a>
          <ul className="nav-links">
            <li>
              <NavLink className="nav-link" to="/">BOOKS</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/categories">CATEGORIES</NavLink>
            </li>
          </ul>
          <button className="icon-button" type="button"><span className="material-icons primary-color">person</span></button>
        </nav>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
