import React from 'react';
import { useForm } from "react-hook-form";
import './ShareYourExperience.css';

const ShareYourExperience = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }                   
    return (
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
    );
};

export default ShareYourExperience;