import React, { useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
     const { signIn } = useContext(AuthContext);
     const navigate = useNavigate();

     const handleLogin = event => {
          event.preventDefault();

          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          // console.log(email, password);

          signIn(email, password)
               .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    form.reset();
                    navigate('/category/0');
               })
               .catch(error => {
                    console.log(error)
               });
     }

     return (
          <Container className="d-flex justify-content-center align-items-center mt-5">
               <Row className="w-100">
                    <Col md={6} lg={5} className="mx-auto">
                         <div className="shadow p-4 rounded bg-white">
                              <h3 className="text-center mb-4">Login your account</h3>
                              <Form onSubmit={handleLogin}>
                                   <Form.Group controlId="formBasicEmail" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter your email" required />
                                   </Form.Group>

                                   <Form.Group controlId="formBasicPassword" className="mb-4">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Enter your password" required />
                                   </Form.Group>

                                   <Button variant="dark" type="submit" className="w-100">
                                        Login
                                   </Button>
                                   <Form.Text className='text-success'>

                                   </Form.Text>
                                   <Form.Text className='text-danger'>

                                   </Form.Text>
                              </Form>
                              <div className="text-center mt-3">
                                   <span>Do not Have An Account? </span>
                                   <Link to="/register" className="text-danger">Register</Link>
                              </div>
                         </div>
                    </Col>
               </Row>
          </Container>
     );
};

export default Login;