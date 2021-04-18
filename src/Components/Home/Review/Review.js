import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './review.css'


const Review = () => {
    const [review,setReview]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getReview')
        .then(res=>res.json())
        .then(data=>{setReview(data)
        console.log(review)
        })
    },[])
    return (
        <section className="review">

            <div className="container">
                <p className="heading-p">Testimonial</p>
                <h2 className="heading-h2">What Client Say</h2>
                <div className="row">

                    {review.map(review=><ReviewDetails review={review}></ReviewDetails>)}

                </div>
            </div>
            
        </section>
    );
};

export default Review;