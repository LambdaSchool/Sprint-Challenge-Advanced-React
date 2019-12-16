import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';


const useDarkMode = () => {
    const [ darkModeEnabled, setDarkModeEnabled ] = useLocalStorage("darkMode");


    useEffect(() => {
      if (darkModeEnabled === true) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }, [darkModeEnabled]);

    return [ darkModeEnabled, setDarkModeEnabled];

};

export default useDarkMode; 