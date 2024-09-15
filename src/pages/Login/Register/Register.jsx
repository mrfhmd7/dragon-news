import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = () => {
     const [termsAccepted, setTermsAccepted] = useState(false);

     return (
          <Container className="d-flex justify-content-center align-items-center mt-5">
               <Row className="w-100">
                    <Col md={6} lg={5} className="mx-auto">
                         <div className="shadow p-4 rounded bg-white">
                              <h3 className="text-center mb-4">Register your account</h3>
                              <Form>
                                   <Form.Group controlId="formName" className="mb-3">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" name="name" placeholder="Enter your name"  required/>
                                   </Form.Group>

                                   <Form.Group controlId="formPhotoURL" className="mb-3">
                                        <Form.Label>Photo URL</Form.Label>
                                        <Form.Control type="text" name="photo" placeholder="Enter photo URL" />
                                   </Form.Group>

                                   <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter your email address" required/>
                                   </Form.Group>

                                   <Form.Group controlId="formPassword" className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Enter your password" required/>
                                   </Form.Group>

                                   <Form.Group controlId="formTerms" className="mb-3">
                                        <Form.Check
                                             type="checkbox"
                                             label="Accept Term & Conditions"
                                             checked={termsAccepted}
                                             onChange={() => setTermsAccepted(!termsAccepted)}
                                        />
                                   </Form.Group>

                                   <Button variant="dark" type="submit" className="w-100" disabled={!termsAccepted}>
                                        Register
                                   </Button>
                              </Form>
                         </div>
                    </Col>
               </Row>
          </Container>
     );
};

export default Register;
