import React from 'react';
import logo from '../../Assets/Images/EMPlogo.png'
import '../../../src/App.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import { NavDropdown } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Exact Match Personnel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='about'>About</Nav.Link>
                            <NavDropdown title="Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to='employees'>Employees</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='employers'>Employers</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to='resources'>
                                    Resources
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;