import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Header() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))

    }, []);

    return (
        <>
            <header id="header" className="fixed-top header-transparent header-scrolled">
                <div className="container">

                    <div className="logo float-left">
                        <h1 className="text-light">
                            <Link to="/"><span>Moderna</span></Link>
                        </h1>
                    </div>

                    <nav className="nav-menu float-right d-none d-lg-block">
                        <ul>
                            <li className="active"> <Link to="/">Home</Link> </li>
                            <li> <Link to="/about">About</Link></li>
                            <li> <Link to="/services">Services</Link></li>
                            <li> <Link to="/contact">Contact</Link></li>
                            {!user && <li> <Link to="/login">Login</Link></li>}
                            {user && <li> <Link to="/page1">Page1</Link></li>}
                            {user && <li> <Link to="/page2">Page2</Link></li>}
                            {user && <li> <Link to="/page3">Page3</Link></li>}
                            {user && <li> <Link to="/Logout">Logout</Link></li>}
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    );
}

export default Header;