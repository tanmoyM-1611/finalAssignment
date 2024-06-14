import React, { useEffect, useState } from 'react';
import InstructorCard from '../InstructorCard/InstructorCard';

const AllInstructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                
              
                setAllInstructors(data);
                
                

            });
    }, [])
    return (
        <div className='flex flex-col items-center'>
        <div className='my-10'>
        <h2 className="text-3xl font-bold text-yellow-500 text-center ">All Instructors</h2>
        <p className='text-center'>Total: {allInstructors.length}</p>
        <div className="divider"></div> 
        </div>

        {
            allInstructors.map(item=> <InstructorCard key={item.name} item={item}></InstructorCard>)
        }

    </div>
    );
};

export default AllInstructors;