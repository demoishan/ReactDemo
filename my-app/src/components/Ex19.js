import React, { useReducer } from 'react';
function App1(props) {
  return (
    <div>
      <center><h1>spread operator (...props)</h1></center>
      <h2>First Name : {props.firstName}</h2>
      <h2>Last Name : {props.lastName}</h2>
      <h2>age : {props.age}</h2>
    </div>
  );
}

function App2() {

  const props = { firstName: 'Ishan', lastName: 'Joshi', age: 30 };
  return <App1 {...props} />;
}
export default App2;