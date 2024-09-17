import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import profile from '../../../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
     const { user, logOut } = useContext(AuthContext);

     const handleLogout = () => {
          logOut()
               .then(() => {})
               .catch(error => {
               console.log(error);
          })
     }

     return (
          <Container>
               <Navbar collapseOnSelect expand="lg" className="bg-light mt-3 mb-2">
                    <Container>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mx-auto">
                                   <Nav.Link href="/category/0">Home</Nav.Link>
                                   <Nav.Link href="#pricing">About</Nav.Link>
                                   <Nav.Link href="#pricing">Career</Nav.Link>
                              </Nav>
                              <Nav className='align-items-center'>
                                   {
                                        user &&

                                        <img style={{ height: '40px', marginRight: '10px' }} src={profile} alt="" />
                                   }
                                   {
                                        user ?
                                             <Button onClick={handleLogout} variant="secondary">Log Out</Button>
                                             :
                                             <Link to="/login">
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