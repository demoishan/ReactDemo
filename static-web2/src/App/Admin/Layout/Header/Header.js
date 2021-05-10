import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

function Header() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))

    }, []);

    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="/admin/" className="brand-link">
                    <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    />
                    <span className="brand-text font-weight-light">Admin</span>
                </a>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="/admin/" className="d-block">User Name</a>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item has-treeview menu-open">
                                <NavLink  strict  className="nav-link" activeClassName='active' to='/admin/'>
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                <i className="right fas fa-angle-left"></i>
                                    </p>
                                </NavLink>

                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink exact={true} className="nav-link" activeClassName='active' to='/admin/Form1'>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Form1</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact={true} className="nav-link" activeClassName='active' to='/admin/Form2'>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Form2</p>
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink exact={true} className="nav-link" activeClassName='active' to='/admin/Form3'>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Form3</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>



        </>
    );
}

export default Header;