import {useEffect, useState} from 'react';
import useLocalStorage from './useLocalStorage';



const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (darkMode === true) {
          document.body.classList.add('dark-mode')
      }else{
          document.body.classList.remove('dark-mode')
      }
}, [darkMode])
return [darkMode, setDarkMode]
}
export default useDarkMode;