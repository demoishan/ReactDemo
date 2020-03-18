import React from 'react';

export const LoaderContext = React.createContext({
    isLoading: false,
    toggleLoader: (status) => {
        this.isLoading = status; 
    }
});