import React, { useState } from 'react';

import Header from "./Header/Header"
import Footer from "./Footer/Footer"

import ContentDiv from './Container/Container';


function Layout(props) {
    return (
        <React.Fragment>
            <Header />
            <ContentDiv>
                {props.children}
            </ContentDiv>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;