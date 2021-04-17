import React from 'react';
import pic from '../../../images/memberpic3.png'
import TeamMember from '../TeamMember/TeamMember';
const memberInfo=[
    {
        name:'Jhon Doe',
        trainer:'Web Designer',
        image:pic
    },
    {
        name:'Jhon Doe',
        trainer:'Web Designer',
        image:pic
    },
    {
        name:'Jhon Doe',
        trainer:'Web Designer',
        image:pic
    }
]

const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <p className="heading-p">Our Team</p>
                <h2 className="heading-h2">
                  Our Honourable Trainers</h2>
                <div className="row">
                   
                   {
                       memberInfo.map(member=><TeamMember member={member}></TeamMember>)
                   }
                    
                </div>
            </div>
            
        </section>
    );
};

export default Team;