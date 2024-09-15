import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import profile from '../../../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
     const { user } = useContext(AuthContext);
     return (
          <Container>
               <Navbar collapseOnSelect expand="lg" className="bg-light mt-3 mb-2">
                    <Container>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mx-auto">
                                   <Nav.Link href="/">Home</Nav.Link>
                                   <Nav.Link href="#pricing">About</Nav.Link>
                                   <Nav.Link href="#pricing">Career</Nav.Link>
                              </Nav>
                              <Nav className='align-items-center'>
                                   {
                                        user &&

                                        <img style={{ height: '40px' }} src={profile} alt="" />

                                   }
                                   {
                                        user ?
                                             <Button variant="secondary">Log Out</Button>
                                             :
                                             <Link to="login">
                                                  <Button variant="secondary">Login</Button>
                                             </Link>
                                   }

                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </Container>
     );
};

export default NavigationBar;