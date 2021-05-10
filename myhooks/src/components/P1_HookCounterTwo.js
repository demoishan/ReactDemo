import React, { useState } from 'react';

function P1_HookCounterTwo() {
    const initCount = 0
    const [count, setCount] = useState(initCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            count: {count}
            <button onClick={() => setCount(initCount)}>Rest</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Inc</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decr</button>
            <button onClick={incrementFive}>inct 5</button>
        </div>
    );
}

export default P1_HookCounterTwo;