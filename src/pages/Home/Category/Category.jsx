import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
// import { useParams, } from 'react-router-dom';

const Category = () => {
     // const { id } = useParams();
     const categoryNews = useLoaderData();

     return (
          <div>
               {/* <h2>This is Category: {categoryNews.length}</h2> */}
               {
                    categoryNews.map(news => <NewsCard
                         key={news._id}
                         news={news}
                    >
                    </NewsCard>)
               }
          </div>
     );
};

export default Category;