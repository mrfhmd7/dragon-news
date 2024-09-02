import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
     return (
          <Container>
               <div className="text-center">
                    <img src={logo} alt="" />
                    <p><small className='text-secondary'>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format('dddd, MMMM D, YYYY')}</p>
               </div>
               <div className='d-flex' style={{ backgroundColor: '#F3F3F3' }}>
                    <Button variant="danger">Breaking...</Button>
                    <Marquee>
                         I can be a React component, multiple React components, or just some text..... I can be a React component, multiple React components, or just some text.
                    </Marquee>
               </div>
               <Navbar collapseOnSelect expand="lg" className="bg-light">
                    <Container>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mx-auto">
                                   <Nav.Link href="#features">Home</Nav.Link>
                                   <Nav.Link href="#pricing">About</Nav.Link>
                                   <Nav.Link href="#pricing">Career</Nav.Link>
                              </Nav>
                              <Nav>
                                   <Nav.Link href="#deets">Profile</Nav.Link>
                                   <Nav.Link eventKey={2} href="#memes">
                                   <Button variant="secondary">Login</Button>
                                   </Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </Container>
     );
};

export default Header;