import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Players(key, initialValue) {
    const [someValue, setSomeValue] = useLocalStorage('key', false);

    useEffect(() => {
        const body = document.querySelector('body')
        if (someValue === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }

    }, [someValue])

    return [someValue, setSomeValue]
}

export default Players;