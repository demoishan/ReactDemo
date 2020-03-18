import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Media } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Profile from '../../Profile/Profile';

import { cleartoken } from '../../../services/authenticationservice';
import { getuser } from '../../../services/userservice';

import User from '../../../Modals/User';

import { LoaderContext } from '../../../Contexts/LoaderContext';

import './Header.css';

function Header(props) {
    const history = useHistory();

    const setLoader = useContext(LoaderContext).toggleLoader;

    let [showProfile, setShowProfile] = useState(false);

    const [user, setUser] = useState(new User());
    const [error, setError] = useState("");

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user'));
        setLoader(true);

        getuser(userInfo.id)
            .then(
                (result) => {
                    setLoader(false);
                    if (result && result.data) {
                        setUser(result.data);
                    } else {
                        setError("Sorry...Could not able to find user details.");
                    }
                })
            .catch(
                (error) => {
                    setLoader(false);
                    setError("Sorry...Could not able to find user details.");
                }
            )
    }, [])

    function signOut() {
        cleartoken();
        history.push("/login");
    }
    function viewProfile() {
        showProfile = setShowProfile(true);
    }
    function closeProfile() {
        showProfile = setShowProfile(false);
    }
    let dropdownAvatar = (
        <React.Fragment>
            <Media className="float-left">
                <img src={user.avatar} width={33} className="m-auto avatar" alt="User Profile" />
            </Media>
            
            {user.first_name + " " + user.last_name}
        </React.Fragment>
    )
    return (
        <div>
            <Navbar className='custom-header'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <NavDropdown title={dropdownAvatar} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={viewProfile}>
                                <FontAwesomeIcon icon={faUserCircle} />
                                <span> View Profile</span>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={signOut}>
                                {/* <Link to="/login"> */}
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                <span> Sign Out</span>
                                {/* </Link> */}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {showProfile &&
                <Profile
                    showProfile={showProfile}
                    closeProfile={closeProfile}
                    user={user}
                    error={error}
                ></Profile>
            }
        </div>
    )
}

export default Header;