import React, { useState } from 'react';

function P1_HookCounterThree() {
    const [name, setName] = useState({ firstname: '', lastName: '' })
    return (
        <form>
            <input type='text'
                value={name.firstname}
                onChange={e => setName({ ...name, firstname: e.targe.value })} />
            <input type='text'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.targe.value })} />
            <h2>FirstName: {name.firstname}</h2>
            <h2>LastName: {name.lastName}</h2>
        </form>
    );
}

export default P1_HookCounterThree;