import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Header = () => {
    const [ darkMode, setDarkMode ] = useDarkMode(false)
    return (
    <div style={{ background: 'blue', width: "100%", height: 50 }}>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </div>
    )
}

export default Header; 