import React from 'react';
import { Bounce, Fade } from 'react-awesome-reveal';


const FeedBack = () => {
    return (
        <div className='bg-blue-300 pb-5'>
            <div>
                <h3 className="text-4xl font-bold text-center my-8 pt-4 ">FeeadBack</h3>
                <div className="divider bg-white"></div>

            </div >

            <div className='flex items-center justify-center my-10'>
                <div className="h-96 w-96 carousel   carousel-vertical rounded-box ">
                <div className="carousel-item h-full bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div className=' flex flex-col gap-1 justify-center ms-10'>
                            <Bounce>
                                <img className='h-[100px] w-[100px] rounded-full' src="person1.jpg" alt="" />
                            </Bounce>
                            <Fade delay={1e3}><p className=" font-bold text-white">Best Best $ Best.</p></Fade>
                        </div>

                    </div>
                    <div className="carousel-item h-full bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div className=' flex flex-col gap-1 justify-center ms-10'>
                            <Bounce>
                                <img className='h-[100px] w-[100px] rounded-full' src="person2.jpg" alt="" />
                            </Bounce>
                            <Fade delay={1e3}><p className=" font-bold text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolorum sed eaque, voluptatem fugiat ea voluptate iste earum repudiandae iure hic neque quidem cumque ab excepturi officia omnis numquam libero..</p></Fade>
                        </div>

                    </div>
                    <div className="carousel-item h-full bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div className=' flex flex-col gap-1 justify-center ms-10'>
                            <Bounce>
                                <img className='h-[100px] w-[100px] rounded-full' src="person3.jpg" alt="" />
                            </Bounce>
                            <Fade delay={1e3}><p className=" font-bold text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, expedita eum veniam sint at magnam facilis ducimus reiciendis voluptate distinctio cum earum fugiat in quis placeat velit molestias beatae cupiditate?.</p></Fade>
                        </div>

                    </div>
                    <div className="carousel-item h-full bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div className=' flex flex-col gap-1 justify-center ms-10'>
                            <Bounce>
                                <img className='h-[100px] w-[100px] rounded-full' src="person4.jpg" alt="" />
                            </Bounce>
                            <Fade delay={1e3}><p className=" font-bold text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, beatae tempore! Cumque mollitia maiores rerum amet reiciendis quis earum enim dicta corporis, vero excepturi, omnis eveniet fugiat similique harum sed?.</p></Fade>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FeedBack;