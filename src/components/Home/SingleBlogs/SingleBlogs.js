import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SingleBlogs = ({ blog}) => {
    const { name, price, experience, img, date, rating, _id} = blog;
    // if(loading){
    //     return <h2>Loading....</h2>
    // }
    const { admin } = useAuth()
    return (
        <div>
             <div>
            <>
                <div className="col mb-3">
                    <div className="card h-100 card-image">
                        <img src={img} classNameNmae="card-img-top " alt="" />
                        <div className="card-body">
                            <div className="price-time ">
                                <h6>{price}</h6>
                            </div>
                            <h4 className="card-title">{name}</h4>

                            <p className="card-text">{experience}</p>
                            <p className="card-text">{date}</p>
                            <p className="card-text">{rating}</p>
                            <p>
                            <Rating
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                initialRating={rating}
                                readonly
                            />
                        </p>
                            {/* <Link to={`/placeorder/${_id}`}><button className="Buy-Now">Buy Now</button></Link> */}
                            <Link to={`/detail/${_id}`} ><button type="">Read More</button></Link>
                            { admin &&
                                 <Link to={`/detail/${_id}`} ><button type="">DELETE</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </>
        </div>
        </div>
    );
};

export default SingleBlogs;