import React from 'react';

const ClassCard = ({item}) => {
    return (
       
         <div className="hero min-h-screen bg-yellow-400 my-5 w-3/4 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={item.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{item.name}</h1>
                    <h2 className="py-6 text-2xl"><span className='font-bold'>Instructor:</span> {item.instructor}</h2>
                    <h2 className="text-2xl"><span className='font-bold'>Price:</span> {item.price}</h2>
                    <h2 className="py-6 text-2xl"><span className='font-bold'>Available Seats:</span>{item.seats}</h2>
                   
                    <button className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
       
    );
};

export default ClassCard;