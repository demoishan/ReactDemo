import React, { useState, useEffect } from 'react';

function Ex24() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn React' }, { text: 'Learn Angular' }, { text: 'Learn vue' }, { text: 'Learn MVC' }]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });


    return (
        <div>
            <center><h1>useState & useEffect Demo</h1></center>

            <p>Count : {count} </p>
            <button onClick={() => setCount(count + 1)}>Click me (setCount)</button>

            <p>Age : {age} </p>
            <button onClick={() => setAge(age + 1)}>Click me (setAge)</button>

            <p>Fruit : {fruit} </p>
            <button onClick={() => setFruit('Orange')}>Click me (setFruit)</button>

            <p>Todos :{todos.map(todo => <div>{todo.text}</div>)}</p>
            <button onClick={() => setTodos([{ text: 'React' }, { text: 'Redux' }, { text: 'Hooks' }, { text: 'Ref' }])}>Click me (setTodos)</button>

        </div>
    );
}
export default Ex24;