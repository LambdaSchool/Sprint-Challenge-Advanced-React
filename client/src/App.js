import React from "react";
import "./App.css";
import PlayerData from "./components/playerData";
import useDarkMode from "./components/useDarkMode";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <div
      className="App"
      style={{
        background: theme === "dark" ? "#000" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <button type="button" onClick={toggleTheme}>
        Switch Theme
      </button>

      <PlayerData />
    </div>
  );
}

export default App;
