import React, {useState} from 'react';

export const useLocalStorage = (key, initialState = '') => {
    const [storedValue, setStorageValue] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        else {
            window.localStorage.setItem(key, JSON.stringify(initialState));
            return initialState;
        }
    })

    const setValue = value => {
        setStorageValue(value)
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    
    return [storedValue, setValue];
}