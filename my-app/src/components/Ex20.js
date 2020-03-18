import React from 'react';

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

function ListOfTenThings() {
    return (
        <div>
            <center><h1>Calls the children callback numTimes to produce a repeated component</h1></center>
            <Repeat numTimes={10}>
                {(index) => <div key={index}>This is item {index} in the list</div>}
            </Repeat>
        </div>
    );
}
export default ListOfTenThings;