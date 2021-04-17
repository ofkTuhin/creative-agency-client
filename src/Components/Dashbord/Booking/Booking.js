import React, { useState,useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './booking.css'
import PaymentCard from '../PaymentCard/PaymentCard';
import { useParams } from 'react-router';



const Booking = () => {
    const [orderProduct,setOrderProduct]=useState([])
    const {_id}=useParams()

    useEffect(()=>{
        fetch('http://localhost:5000/orderService/'+_id)
        .then(res=>res.json())
        .then(data=>{setOrderProduct(data)
            console.log(orderProduct)
           
        })
    },[])
    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =  (data) => {


       
       

        console.log(data)
    }
    return (
        <div className="bookings">

            <div className="header">
                <img></img>
                <h4>Booking</h4>
                <h5 className="">name</h5>
            </div>

            <div className="row">
                <div className="col-md-2"><Sidebar _id={_id}></Sidebar></div>
                <div className="col-md-4">
                    <div className="booking-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}




                            <div className="form-group">
                                <input {...register("name", { required: true })} type="text" className="form-control" name="name" placeholder="Your Name" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            {/* <div className="form-group">
                        <input {...register("subject", { required: true })} type="text" className="form-control" name="subject" placeholder="Phone Number" />
                        {errors.subject && <span>This field is required</span>}
                    </div> */}

                            <div className="form-group">
                                <input {...register("email", { required: true })} type="email" className="form-control" name="email" placeholder="Email" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-group row">

                                <div className="col-4">

                                    <select className="form-control" name="subject" {...register("subject", { required: true })} >
                                        <option disabled={true} value="Not set">Choose subject</option>
                                        <option value="Web design">{orderProduct.name}</option>
                                        
                                    </select>
                                    {errors.subject && <span className="text-danger">This field is required</span>}

                                </div>
                                <div className="col-4">

                                    <select className="form-control" name="gender" {...register("gender", { required: true })} >
                                        <option disabled={true} value="Not set">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Not set">Other</option>
                                    </select>
                                    {errors.gender && <span className="text-danger">This field is required</span>}

                                </div>



                                <div className="col-4">
                                    <input {...register("age", { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                                    {errors.age && <span className="text-danger">This field is required</span>}
                                </div>


                               

                            </div>



                            <div className="form-group text-right">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>this is payment</h3>
                <PaymentCard></PaymentCard>
                </div>
            </div>
        </div>

    );
};

export default Booking;