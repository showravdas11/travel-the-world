import React, { useEffect, useState } from 'react';

const ApproveBlog = () => {

    const [blogs, setBlogs] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(() => {
        fetch("https://travel-the-world11.herokuapp.com/blogsUnApproved")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [isUpdate])

    const approveBlog = (id) => {
        fetch(`https://travel-the-world11.herokuapp.com/approveBlog/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        })
        .then(res => res.json())
        .then(data => setIsUpdate(!isUpdate))

    }

    return (
        <div>
            <table>
            <tr>
                <th>Name</th>
                <th>Action</th>
            </tr>
            {
                blogs.map(blog => (
                    <tr>
                        <td>{blog.name}</td>
                        {
                            blog.isApproved === false ? <button onClick = {() => approveBlog(blog._id)} className="btn btn-primary">Approve</button> : <p>Approved</p> 
                            
                        }
                    </tr>
                ))
            }
            </table>
        </div>
    );
};

export default ApproveBlog;