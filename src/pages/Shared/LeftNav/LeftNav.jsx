import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import EditorsInsight from '../../News/EditorsInsight/EditorsInsight';

const LeftNav = () => {

     const [categories, setCategories] = useState([]);

     useEffect(() => {
          fetch('https://the-news-dragon-server-gold-nu.vercel.app/categories')
               .then(res => res.json())
               .then(data => setCategories(data))
          // .then(error => console.error(error));
     }, [])

     return (
          <div>
               <h4>All Category</h4>
               <div className='ps-4'>
                    {
                         categories.map(category => <p
                              key={category.id}
                         >
                              <NavLink
                                   to={`/category/${category.id}`}
                                   className='text-decoration-none text-black'
                              >
                                   {category.name}
                              </NavLink>
                         </p>)
                    }
               </div>
               <EditorsInsight direction="column" />
          </div>
     );
};

export default LeftNav;