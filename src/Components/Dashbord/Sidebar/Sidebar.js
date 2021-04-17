import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = ({_id}) => {
    return (
        <div className="sidebar">
            <ul>
                
               <Link to={`/booking/${_id}`}> <li>Book</li></Link>
               <li>Booking List</li>
                <Link to='/review'><li>Review</li></Link>
                
                

            </ul>
        </div>
    );
};

export default Sidebar;