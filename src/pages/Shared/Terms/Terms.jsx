import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
     return (
          <Container>
               <h2>Our Terms and condions </h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum esse unde ratione, aut nesciunt ad. Labore eveniet quaerat dicta ipsum? Deserunt tempore obcaecati rem officia minus hic quia voluptas quas at quis ullam vero, est, molestiae molestias non nisi commodi odit adipisci natus iste alias eaque labore animi. Iusto.</p>
               <p>Go back to <Link to="/register"> Register </Link></p>
          </Container>
     );
};

export default Terms;