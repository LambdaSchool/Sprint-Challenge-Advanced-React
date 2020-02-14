import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    return useLocalStorage(key, initialValue)
}