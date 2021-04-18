import React from 'react';

import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ console.log(data)
        const url=`http://localhost:5000/addAdmin`
        fetch(url,{
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(data)
        })
    
    };
  
  
  
    return (
       <div className="row">
            <div className="col-md-2"><Sidebar></Sidebar> </div>
            <div className="col-md-6">    <form onSubmit={handleSubmit(onSubmit)} className="ship-form">
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-group">
        <input className="form-control"  {...register("name",{ required: true })}  name="name" placeholder="name" />
        {errors.name && <span>This field is required</span>}
        </div>
        {/* include validation with required or other standard HTML validation rules */}
      <div className="form-group">
      <input className="form-control" {...register("email", { required: true })} type="text"  placeholder="email" />
        {errors.email && <span>This field is required</span>}
      </div>
      
        {/* errors will return when field validation fails  */}
        
        
       
        
        <div className="form-group">
        <input className="form-control" type="submit" />
        </div>
      </form></div>
      
        </div>
       
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    )
};

export default AddAdmin;