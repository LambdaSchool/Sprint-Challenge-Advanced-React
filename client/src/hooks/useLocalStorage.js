import { useState } from "react";


export const useLocalStorage = (key, value) => {

    if (window.localStorage && window.localStorage.getItem(key)) {
        value = JSON.parse(window.localStorage.getItem(key))
    } else {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    const [ storedValue, setStoredValue ] = useState(value)

    const setLocalStorage = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
        setStoredValue(value)
    }

    return [ storedValue, setLocalStorage ]
} 