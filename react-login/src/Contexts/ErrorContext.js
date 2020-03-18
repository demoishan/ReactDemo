import React from 'react';

export const ErrorContext = React.createContext({
    error: "",
    setError: (error) => {
        this.error = error; 
    }
});