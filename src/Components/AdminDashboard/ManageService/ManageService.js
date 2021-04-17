import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './manageService.css'

const ManageService = () => {
    const [service,setService]=useState([])
    useEffect(()=>{
        
            fetch('http://localhost:5000/getService')
            .then(res=>res.json())
            .then(data=>setService(data))
        
    },[])
    return (
        <div children="manage-service">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6 offset-md-1">
                    <table>
                        <tr>
                            <th>Course</th>
                            <th>Duration</th>
                            <th>Classes</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                        <tbody>
                            {service.map(service=><tr>
                                <td>{service.name}</td>
                                <td>{service.duration}</td>
                                <td>{service.classes}</td>
                                <td>${service.price}</td>
                                <td><button>Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default ManageService;