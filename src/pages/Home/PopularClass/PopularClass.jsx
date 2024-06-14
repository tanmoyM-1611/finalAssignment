import React, { useEffect, useState } from 'react';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                
                data.sort((a, b) => {
                    return b.total_students - a.total_students;
                });
                setClasses(data);
                
                

            });
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-4xl font-bold text-center my-5 text-yellow-500">Popular Classes</h3>
                <div className="divider"></div> 
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-2 relative'>
                {
                    classes.slice(0, 6).map(item => <div key={item.name}>
                        <h2 className="text-4xl font-bold text-yellow-400  absolute ms-4 mt-4">{item.name}</h2>
                        <h2 className="text-2xl ms-4 mt-16 text-white font-bold absolute">Total Students:{item.total_students}</h2>
                        <img className='rounded-lg' src={item.image} alt="" />

                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClass;