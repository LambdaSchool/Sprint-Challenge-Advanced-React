const useStyling = () => {


    const eventHandler = event => {
        event.target.classList.add('shake-slow')
    }

    const eventHander2 = event => {
        event.target.classList.remove('shake-slow')
    }

    return [eventHandler, eventHander2]
}

export default useStyling
