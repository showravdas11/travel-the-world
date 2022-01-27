import React, { useEffect, useState } from 'react';
import SingleBlogs from '../SingleBlogs/SingleBlogs';

const HomeBlogs = () => {
    const [blogs, setBlogs] = useState([])
    // const [loading,setLoading] = useState(false)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [postsPerPage, setPostPerPage] = useState(10)

    useEffect(() => {
        // setLoading(true)
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
            // setLoading(false)
    }, [])

    //get current page
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <>
        <div className="homeproduct-section">
            <p className="text-center">OUR VEHICLES BRANDS & TYPE</p>
            <h3 className="products-head text-center"><span>Find Your</span> Best Vehicles.</h3>
            h3
        </div>

        <div className="product-bg">

            <div className="container product-bg">
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        blogs.map(blog => <SingleBlogs
                            // key={car.name}
                            blog={blog}
                            // loading={loading}
                        >

                        </SingleBlogs>) 
                    }
                </div>
            </div>
        </div>
    </>
    );
};

export default HomeBlogs;