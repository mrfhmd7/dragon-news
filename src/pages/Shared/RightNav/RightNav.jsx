import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
     return (
          <div>
               <h4>Login with</h4>
               <Button className='w-75 mt-2' variant="outline-primary"> <FaGoogle /> Login with google</Button>
               <Button className='w-75 mt-3' variant="outline-secondary"> <FaGithub /> Login with github</Button>
               <div className='mt-4'>
                    <h4>Find Us On</h4>
                    <ListGroup className='mt-3 gap-1'>
                         <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                         <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                         <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                    </ListGroup>
                    <QZone />
                    <div className='text-center mt-3' style={{ backgroundImage: `url(${bg})`, padding: '50px 20px', color: 'white', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px' }}>
                         <h3>Create an Amazing Newspaper</h3>
                         <p>Discover thousands of options, easy to customize layouts, one-click to import demo, and much more.</p>
                         <Button variant="danger">Learn More</Button>
                    </div>
               </div>
          </div>
     );
};

export default RightNav;