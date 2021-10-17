import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.jpg'
import './Header.css'
const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <Navbar className="nav-bar">
            <Container>
                <Navbar.Brand href="#home"> <img
                    src={logo}
                    width="70"
                    // height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link className="text-white text-decoration-none fs-4  p-1 me-3" to="/home">Home</Link>
                    <Link className="text-white text-decoration-none fs-4  p-1 me-3" to="/register">Register</Link>
                    {user.displayName && user.displayName}
                    { user.displayName? <button onClick={logOut}>Logout</button> 
                        : <Link className="text-white text-decoration-none fs-4 login-link p-1" to="/login">Login</Link>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;