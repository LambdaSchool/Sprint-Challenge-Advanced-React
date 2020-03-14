import React from 'react';
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };


    return (
    <nav className="navbar">
        <div className="headerToggle">
            <div className="dark-mode-toggle">
                {/* //go back and check it */}
                <button data-testid="dark-mode" type="button"
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'} />
            </div>
        </div>
        <h1>Women's World Cup Players Name List</h1>
    </nav>
    )
}

export default Navbar;