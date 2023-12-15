import logo from "../img/logo.png";

export const AppHeader = () => {
  return (
    <div className="app-header">
      <img src={logo} alt="An emoji-styled monkey with glasses" />
      <h1>Bookmonkey</h1>
    </div>
  );
};
