import React, { useState } from 'react';

function P1_HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)} >
                count {count}
            </button>
        </div>
    );
}

export default P1_HookCounter;