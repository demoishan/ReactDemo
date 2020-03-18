import React, { useReducer } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };

        default:
            return state;
    }
};
function Increment({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    let description;
    if (state.count % 2 == 0) {
        description = <strong>even</strong>;
    } else {
        description = <i>odd</i>;
    }

    return (
        <div>
            <center><h1>useReducer Demo</h1></center>            
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment: {state.count}
            </button>
            <div>{state.count} is an {description} number</div>
        </div>
    );
}
export default Increment;