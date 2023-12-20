import { useContext } from 'react';
import logo from '../img/logo.png';
import { ThemeContext } from '../domain/theme/ThemeContext';
import { ThemeEditor } from '../domain/theme/ThemeEditor';
import { NavLink } from 'react-router-dom';

export const AppHeader = () => {
  const { primaryColor } = useContext(ThemeContext);

  return (
    <div className="app-header">
      <img src={logo} alt="An emoji-styled monkey with glasses" />
      <h1 style={{ color: primaryColor }}>Bookmonkey</h1>
      <ThemeEditor />
      <nav>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};
