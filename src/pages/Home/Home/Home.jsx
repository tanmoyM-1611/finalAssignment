import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {
    return (
        <div>
           <h2 className="text-4xl font-bold text-left my-8 text-yellow-500">Unlock Your Musical Potential with Our Online School of Melodies!</h2> 
           <Banner></Banner>
           <PopularClass></PopularClass>
           <PopularInstructor></PopularInstructor>
           <FeedBack></FeedBack>
        </div>
    );
};

export default Home;