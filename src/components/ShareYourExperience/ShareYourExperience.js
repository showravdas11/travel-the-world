import { default as React } from 'react';
import { useForm } from "react-hook-form";
import './ShareYourExperience.css';


const ShareYourExperience = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        // axios.post('http://localhost:5000/blogs/', data)
        // .then(res => {
        //     console.log(res)
        // })

        fetch('http://localhost:5000/blogs', {
         method: 'POST',
     headers: {
              'Content-Type': 'application/json'
             },
              body: JSON.stringify(data)
      })

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

export default ShareYourExperience;