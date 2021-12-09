import React, { useRef } from 'react'

const App = () => {
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default App
