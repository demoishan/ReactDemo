import React, { useState } from 'react';
function Increment({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    return (
        <div>
            <center><h1>useState Demo</h1></center>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Increment: {count}
            </button>
        </div>
    );
}

function Ex17() {
    return (
        <Increment initialCount={0} />
    );
}

export default Ex17;