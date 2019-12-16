import React from "react";

import useDarkMode from "../hooks/useDarkMode";

const Nav = ()=>{
    const [dark, setDark] = useDarkMode(false);
    const toggleDarkMode = e =>{
        e.preventDefault();
        setDark(!dark);
    };
    return(
        <nav className = "navBar">
            <h1 data-testid = "header">Women's World Cup</h1>
            <div className = "dark-mode__toggle">
                <div
                    data-testid = "toggle"
                    onClick = {toggleDarkMode}
                    className = {dark ? "toggle toggled" : "toggle"}
                />
            </div>
        </nav>
    );
};

export default Nav;