import React, { useEffect, useState } from 'react';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {

                setInstructors(data);

            });
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-4xl font-bold text-center my-8 text-yellow-500">Popular Instructors</h3>
                <div className="divider"></div>

            </div >
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2 relative'>
                {
                    instructors.slice(0, 6).map(item => <div key={item.name}>
                        <h2 className="text-4xl font-bold text-yellow-400  absolute ms-4 mt-4">{item.name}</h2>

                        <img className='rounded-lg' src={item.image} alt="" />

                    </div>)
                }

            </div>
        </div>
    );
};

export default PopularInstructor;