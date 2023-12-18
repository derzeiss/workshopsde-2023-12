import { useContext } from "react";
import logo from "../img/logo.png";
import { ThemeContext } from "../domain/theme/ThemeContext";

export const AppHeader = () => {
  const { primaryColor } = useContext(ThemeContext);

  return (
    <div className="app-header">
      <img src={logo} alt="An emoji-styled monkey with glasses" />
      <h1 style={{ color: primaryColor }}>Bookmonkey</h1>
    </div>
  );
};
