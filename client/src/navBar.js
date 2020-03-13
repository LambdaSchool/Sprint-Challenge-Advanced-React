import React from 'react';
import useDarkMode from './useDarkMode';
import styled from 'styled-components';

const Button = styled.button`
background-color: #8ABAD3ff;
width: 200px;
color: white;
padding: 10px 24px;
border-radius: 50px;
`
const Header = styled.h1`
color: pink;
font-family: cursive
`

const Nav = () => {
    const [dark, setDark] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDark(!dark);
    }
    return (
        <nav>
            <Header>Womens Soccer Team</Header>
            <Button onClick={toggleMode}>Dark</Button>
        </nav>
    )
}

export default Nav;