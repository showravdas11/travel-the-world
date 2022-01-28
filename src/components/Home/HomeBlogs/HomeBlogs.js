import React, { useEffect, useState } from 'react';
import SingleBlogs from '../SingleBlogs/SingleBlogs';
import './HomeBlogs.css';

const HomeBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageNumbers, setPageNumbers] = useState([])
    const [totaBlogs, setTotalBlogs] = useState(0)
    // const [loading,setLoading] = useState(false)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [postsPerPage, setPostPerPage] = useState(10)

    useEffect(() => {
        // setLoading(true)
        fetch(`http://localhost:5000/blogsCount`)
            .then(res => res.json())
            .then(data => setTotalBlogs(data.count))
            // setLoading(false)
    }, [])

    useEffect(() => {
        // setLoading(true)
        fetch(`http://localhost:5000/blogs?page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                let totalPage
                console.log(totaBlogs)
                if(totaBlogs % 10 === 0) {
                    totalPage = totaBlogs / 10
                } else {
                    totalPage = parseInt((totaBlogs / 10)) + 1
                }
                console.log(totalPage)
                let newPageNumbers = []
                for(let i = 0; i < totalPage; i++) {
                    newPageNumbers.push(i+1)
                }
                setPageNumbers(newPageNumbers)
            })
            // setLoading(false)
    }, [totaBlogs, currentPage])

    //get current page
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <>
        <div className="homeproduct-section d-flex justify-content-center">
            <h3 className="text-center experience-head">Experience Of Our Travelers</h3>
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
                <div className='d-flex justify-content-center mb-5'>
                    {
                        pageNumbers.map(page => (
                            <button type="text" className={`btn me-2 ${page == currentPage ? 'btn-primary' : ''}`} onClick={() => setCurrentPage(page)} >{page}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
    );
};

export default HomeBlogs;