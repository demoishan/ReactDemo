import React, { useState } from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import ContentDiv from './Container/Container';

import { Spinner } from 'react-bootstrap';

import { LoaderContext } from '../../Contexts/LoaderContext';
import { ErrorContext } from '../../Contexts/ErrorContext';
function Layout(props) {

    function toggleLoader(status) {
        setContext({ ...context, isLoading: status });
    }

    const [context, setContext] = useState({
        isLoading: false,
        toggleLoader: toggleLoader
    })

    return (
        <React.Fragment>
            <LoaderContext.Provider value={context}>
                <ErrorContext.Provider value={context}>
                    <LoaderContext.Consumer>
                        {value =>
                            value.isLoading &&
                            <div className="background-loader">
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    lg="true"
                                    className="custom-loader"
                                    variant="success"
                                />
                            </div>
                        }
                    </LoaderContext.Consumer>
                    <Header />
                    <Sidebar />
                    <ContentDiv>
                       {props.children}
                    </ContentDiv>
                </ErrorContext.Provider>
            </LoaderContext.Provider>
        </React.Fragment>
    )
}

export default Layout;