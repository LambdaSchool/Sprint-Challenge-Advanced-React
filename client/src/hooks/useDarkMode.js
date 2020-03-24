import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };
  useEffect(() => {
    const body = document.querySelector('body');

    if (theme === 'light') {
      body.classList.add('dark-mod');
    } else {
      body.classList.remove('dark-mode');
    }
    // const localTheme = window.localStorage.getItem('theme');

    // if (localTheme) {
    //   setTheme(localTheme);
    // }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkMode;
