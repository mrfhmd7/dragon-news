import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { BsShareFill } from 'react-icons/bs';
import { FaEye, FaRegBookmark } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
     const { _id, title, details, image_url, author, rating, total_view } = news;
     // console.log(rating.number);
     return (
          <Card className="mb-4">
               <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className="ps-2 flex-grow-1">
                         <p className="mb-0 fw-bold">{author?.name}</p>
                         <p className="mb-0 text-muted">
                              <small>{moment(author?.published_date).format('Do MMM YYYY')}</small>
                         </p>
                    </div>
                    <div className='d-flex gap-2'>
                         <FaRegBookmark />
                         <BsShareFill />
                    </div>
               </Card.Header>
               <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                         {
                              details.length < 300 ? <> {details} </> :
                                   <>
                                        {details.slice(0, 300)}...<Link to={`/news/${_id}`}> Read more
                                        </Link>
                                   </>
                         }
                    </Card.Text>
               </Card.Body>
               <Card.Footer className="text-muted d-flex">
                    <div className="flex-grow-1 d-flex">
                         <Rating
                              style={{ maxWidth: 120 }}
                              value={rating.number}
                              readOnly
                         />
                         <span className="ms-2">{rating?.number}</span>
                    </div>
                    <div>
                         <FaEye className="me-2" />
                         <span>{total_view}</span>
                    </div>
               </Card.Footer>
          </Card>
     );
};

export default NewsCard;