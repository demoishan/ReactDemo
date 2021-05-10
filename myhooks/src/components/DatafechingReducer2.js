import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';

function DatafechingReducer2() {

    const initState = {
        loading: true,
        error: '',
        post: {}
    }


    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_SUCCESS":
                return {
                    loading: false,
                    error: '',
                    post: action.payload
                }
            case "FETCH_ERROR":
                return {
                    loading: false,
                    error: 'ERROR...',
                    post: {}
                }

            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
            })
            .catch(err => {
                dispatch({ type: "FETCH_ERROR" })
            })
    }, [])

    return (
        <div>
            { state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default DatafechingReducer2;