import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
     const [termsAccepted, setTermsAccepted] = useState(false);

     //second way to checkbox for terms and conditions
     //const [accepted, setAccepted] = useState(false);

     const { createUser } = useContext(AuthContext);

     const handleRegister = event => {
          event.preventDefault();

          const form = event.target;
          const name = form.name.value;
          const photo = form.photo.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, photo);

          createUser(email, password)
               .then(result => {
                    const createdUser = result.user;
                    // console.log(createdUser);
                    form.reset();
               })
               .catch(error => {
                    console.log(error);
               })
     }
     {
     /*
     const handleAccepted = event => { 
          setAccepted(event.target.checked)
          console.log(event.target.checked);
     }
     */
     }


     return (
          <Container className="d-flex justify-content-center align-items-center mt-5">
               <Row className="w-100">
                    <Col md={6} lg={5} className="mx-auto">
                         <div className="shadow p-4 rounded bg-white">
                              <h3 className="text-center mb-4">Register your account</h3>
                              <Form onSubmit={handleRegister}>
                                   <Form.Group controlId="formName" className="mb-3">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" name="name" placeholder="Enter your name" required />
                                   </Form.Group>

                                   <Form.Group controlId="formPhotoURL" className="mb-3">
                                        <Form.Label>Photo URL</Form.Label>
                                        <Form.Control type="text" name="photo" placeholder="Enter photo URL" />
                                   </Form.Group>

                                   <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter your email address" required />
                                   </Form.Group>

                                   <Form.Group controlId="formPassword" className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Enter your password" required />
                                   </Form.Group>

                                   <Form.Group controlId="formTerms" className="mb-3">
                                        <Form.Check
                                             type="checkbox"
                                             name="accept"
                                             label={<>Accept <Link to="/terms">Terms and Conditions</Link></>}
                                             checked={termsAccepted}
                                             onChange={() => setTermsAccepted(!termsAccepted)}
                                        //onClick={handleAccepted}
                                        />
                                   </Form.Group>

                                   <Button variant="dark" type="submit" className="w-100" disabled={!termsAccepted}>
                                        Register
                                   </Button>
                              </Form>
                              <div className="text-center mt-3">
                                   <span>Already Have An Account? </span>
                                   <Link to="/login" className="text-danger">Login</Link>
                              </div>
                         </div>
                    </Col>
               </Row>
          </Container>
     );
};

export default Register;
