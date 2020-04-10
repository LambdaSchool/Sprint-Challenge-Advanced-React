import {useEffect} from "react"
import useLocalStorage from './LocalStorage'


const UseDarkMode = () => {
    const [values, setValues] = useLocalStorage("darkMode");
    useEffect(()=> {
        if (values === true) {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    },[values])
    return [values , setValues]
}

export default UseDarkMode