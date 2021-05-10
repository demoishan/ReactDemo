import React, { useEffect, useState } from 'react';

function P1_HookCounterFive() {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        document.title = `Click ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}> click {count}</button>
        </div>
    );
}

export default P1_HookCounterFive;