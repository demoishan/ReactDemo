import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Datafeching3() {
    const [post, setPost] = useState({})
    const [id, setId] = useState([1])
    const [idFromButton, setIdFromButtonClick] = useState([1])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButton])

    const handleClick = () =>{
        setIdFromButtonClick(id)
    }
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick} >Fetch Post</button>
            <div>
                {post.title}
            </div>
        </div>
    )
}

export default Datafeching3;