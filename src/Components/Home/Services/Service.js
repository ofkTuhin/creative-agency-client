import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './service.css'



const Service = () => {
    const[serviceInfo,setServiceInfo]=useState([])
    useEffect(()=>{
        fetch('https://vast-lake-00646.herokuapp.com/getService')
        .then(res=>res.json())
        .then(data=>setServiceInfo(data))
    },[])
    return (
        <section className="service d-flex align-items-center" style={{marginTop:"100px"}}>

            <div className="container">
                <p className="heading-p">services</p>
                <h2 className="heading-h2">Pick a Service Plan</h2>
                <div className="row">
                    {serviceInfo.map(service=><ServiceDetails service={service}></ServiceDetails>)}
                </div>
            </div>




        </section>
            
        
    );
};

export default Service;