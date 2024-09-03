import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightNav = () => {
     return (
          <div>
               <h4>Login with</h4>
               <Button className='w-75 mt-2' variant="outline-primary"> <FaGoogle/> Login with google</Button>
               <Button className='w-75 mt-3' variant="outline-secondary"> <FaGithub/> Login with github</Button>
          </div>
     );
};

export default RightNav;