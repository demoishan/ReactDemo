import React, { useState } from 'react';

import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

import ContentDiv from './Container/Container';
import '../../../assets/css/adminlte.css';
import '../../../assets/css/all.css';
import '../../../assets/css/select2.css';
import '../../../assets/css/select2-bootstrap4.css';

function Layout(props) {
    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <ContentDiv>
                {props.children}
            </ContentDiv>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;