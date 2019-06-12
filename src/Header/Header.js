import React from 'react';
import {  Link } from "react-router-dom";
import { Button, Navbar, Nav,  Form, FormControl, ButtonToolbar } from 'react-bootstrap';
import './Header.css';
import ContactUsModal from '../ContactModal/ContactModal';

class Header extends React.Component {
    state = {
        modalShow: false
    }
   
    render () {
    let modalClose = () => this.setState( prevState => ({
        modalShow : !prevState.modalShow
    }))
    return (
        <React.Fragment>

        <header>
            <div className="container">
                <div className="row">
                    <Navbar bg="light" expand="lg" className="w-100">
                        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/about">Aboutttt</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to={{pathname : '/portfolio'}}>Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/users">Users</Nav.Link>
                            {/* <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                            <Form inline>
                            <ButtonToolbar>
                            <Button 
                                className="mr-2"
                                variant="primary"
                                onClick={() => this.setState({ modalShow: true })}>
                                {this.state.modalShow ? 'Contact Off' : 'Contact On'}
                            </Button>
                    
                            <ContactUsModal
                                show={this.state.modalShow}
                                onHide={modalClose}
                            />
                            </ButtonToolbar>

                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </header>
        </React.Fragment>
    )
}
}

export default Header;