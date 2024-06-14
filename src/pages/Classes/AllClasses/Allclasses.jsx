import React, { useEffect, useState } from 'react';
import ClassCard from '../ClassCard/ClassCard';

const Allclasses = () => {
    const [allclasses, setAllClasses] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                
              
                setAllClasses(data);
                
                

            });
    }, [])
    return (
        <div className='flex flex-col items-center'>
            <div className='my-10'>
            <h2 className="text-3xl font-bold text-yellow-500 text-center ">All Classes</h2>
            <p className='text-center'>Total: {allclasses.length}</p>
            <div className="divider"></div> 
            </div>

            {
                allclasses.map(item=> <ClassCard key={item.name} item={item}></ClassCard>)
            }

        </div>
    );
};

export default Allclasses;