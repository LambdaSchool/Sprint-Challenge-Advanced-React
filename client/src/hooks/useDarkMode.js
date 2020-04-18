import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (value) => {
    const [ localStorage, setLocalStorage ] = useLocalStorage("darkMode", value)

    useEffect(() => {
        if (localStorage) {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [localStorage])

    const setDarkMode = (value) => {
        setLocalStorage(value)
    }

    return [ localStorage, setDarkMode ]
} 