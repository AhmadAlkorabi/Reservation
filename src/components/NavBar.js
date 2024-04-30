import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBAr.css'
import Adding from './Adding';
const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container>
                <Navbar.Brand href="#home">الحجوزات</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="m-auto  fs-5  ">
                        <Link to='/' className='a text-decoration-none m-2 text-black'>المريض الحالي</Link>
                        <Link to='/Wait' className='a text-decoration-none m-2 text-black'>المرضى في الانتظار</Link>
                        <Link to='/Come' className='a text-decoration-none m-2 text-black'>المرضى القادمون </Link>
                    </Nav>
                    <Adding />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar