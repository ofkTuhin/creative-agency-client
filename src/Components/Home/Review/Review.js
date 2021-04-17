import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './review.css'
// import image from '../../../images/testimonialright.png'

// const reviewInfo=[
//     {
//         name:"tuhin",
//         student:'Web Designer',
//         review:"There are many variations passages Lorem Ipsum available,majority suffers",
//         image:image
//     },
//     {
//         name:"tuhin",
//         student:'Graphics Designer',
//         review:"There are many variations passages Lorem Ipsum available,majority suffers",
//         image:image
//     },
//     {
//         name:"tuhin",
//         student:'Web Developer',
//         review:"There are many variations passages Lorem Ipsum available,majority suffers",
//         image:image

//     }
// ]

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