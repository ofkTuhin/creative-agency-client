import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
            <Link to='/addservice'><li>Add service</li></Link>
                <li>Add Admin</li>
                <li>Order List</li>
               <Link to='/manageService'> <li>Manage Service</li></Link>
            </ul>
            
        </div>
    );
};

export default Sidebar;