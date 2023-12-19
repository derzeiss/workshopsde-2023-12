import { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { ThemeContext } from "./domain/theme/ThemeContext";
import { Outlet } from "react-router-dom";

function App() {
  const [primaryColor, setPrimaryColor] = useState("tomato");

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      <div className="app">
        <AppHeader />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
