import React from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';


const FeedBack = () => {
    return (
        <div className='bg-yellow-300 pb-10'>
            <div>
                <h3 className="text-4xl font-bold text-center my-8 pt-4 ">FeeadBack From our Students</h3>
                <div className="divider bg-white"></div>

            </div >

            <div className='flex items-center justify-center my-10'>
                <div className="h-96 w-96 carousel   carousel-vertical rounded-box ">
                <div className="carousel-item h-full bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div className=' flex flex-col gap-1 justify-center ms-10'>
                            <Bounce>
                                <img className='h-[100px] w-[100px] rounded-full' src="person1.jpg" alt="" />
                            </Bounce>
                            <Fade delay={1e3}><p className=" font-bold text-white">Enrolling in the online music school was the best decision I made for my musical journey. The comprehensive curriculum, combined with the guidance of talented instructors, helped me improve my skills exponentially.</p></Fade>
                        </div>

                    </div>
                    <div className="carousel-item h-full bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div className=' flex flex-col gap-1 justify-center ms-10'>
                            <Bounce>
                                <img className='h-[100px] w-[100px] rounded-full' src="person2.jpg" alt="" />
                            </Bounce>
                            <Fade delay={1e3}><p className=" font-bold text-white">Enrolling in the online music school was the best decision I made for my musical journey. The comprehensive curriculum, combined with the guidance of talented instructors, helped me improve my skills exponentially.</p></Fade>
                        </div>

                    </div>
                    <div className="carousel-item h-full bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div className=' flex flex-col gap-1 justify-center ms-10'>
                            <Bounce>
                                <img className='h-[100px] w-[100px] rounded-full' src="person3.jpg" alt="" />
                            </Bounce>
                            <Fade delay={1e3}><p className=" font-bold text-white">Enrolling in the online music school was the best decision I made for my musical journey. The comprehensive curriculum, combined with the guidance of talented instructors, helped me improve my skills exponentially.</p></Fade>
                        </div>

                    </div>
                    <div className="carousel-item h-full bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div className=' flex flex-col gap-1 justify-center ms-10'>
                            <Bounce>
                                <img className='h-[100px] w-[100px] rounded-full' src="person4.jpg" alt="" />
                            </Bounce>
                            <Fade delay={1e3}><p className=" font-bold text-white">Enrolling in the online music school was the best decision I made for my musical journey. The comprehensive curriculum, combined with the guidance of talented instructors, helped me improve my skills exponentially.</p></Fade>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FeedBack;