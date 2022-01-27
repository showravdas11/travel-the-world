import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './BlogDetailPage.css';

const BlogDetailPage = () => {
    const {detailId} = useParams()
    const [singleblog, setSingleBlog] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${detailId}`)
        .then(res => res.json())
        .then(data => setSingleBlog(data));
    },[])
    return (
        <div>
            <h2 className='text-center mt-5'>Name of the place: {singleblog.name}</h2>
            <div className='d-flex justify-content-center'>
            <img src={singleblog.img} alt=""/>
            </div>
            <h6 className='text-center px-5 pt-3'> <h3>Visitor Experience</h3> {singleblog.experience}</h6> 
            <h6 className='text-center pt-2'> Price {singleblog.price}</h6> 
            <h6 className='text-center pt-2'> Date {singleblog.Date}</h6> 
            <div className='d-flex justify-content-center mt-3'>
            <Rating
                                emptySymbol="far fa-star icon-color "
                                fullSymbol="fas fa-star icon-color"
                                initialRating={singleblog.rating}
                                readonly
                            /> 
            </div>

                           <div className='d-flex justify-content-center mb-5 mt-4'>
                           <Link to='/shareExperience'><button className='share share-experience-btn' type="">Share Your Experience</button></Link>
                           </div>
            
        </div>
    );
};

export default BlogDetailPage;