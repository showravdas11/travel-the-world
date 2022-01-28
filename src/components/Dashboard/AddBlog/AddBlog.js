import { default as React } from 'react';
import { useForm } from "react-hook-form";
import './AddBlog.css';


const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        // axios.post('https://travel-the-world11.herokuapp.com/blogs/', data)
        // .then(res => {
        //     console.log(res)
        // })

        fetch('https://travel-the-world11.herokuapp.com/blogs', {
         method: 'POST',
     headers: {
              'Content-Type': 'application/json'
             },
              body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => alert("Blog added successfully"))

            // .catch((err) => console.log(err));
    }                   
    return (
        <>
        <div className='d-flex justify-content-center mt-5'>
            <h2 className='share-ex-head'>Share Your Experience</h2>
        </div>
      <div className='add-experience'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder='Your Name' />
                <input {...register("img")} placeholder='img'/>
                <textarea {...register("experience")} placeholder='Share Your Experience'/>
                <input type="number" {...register("price")} placeholder='Price'/>
                <input type="date" {...register("Date")} placeholder='Date'/>
                <input type="number" {...register("rating")} 
                placeholder='Rating(1-5)'/>
                <input type="submit" />
            </form>
      </div>
      </>
    );
};

export default AddBlog;