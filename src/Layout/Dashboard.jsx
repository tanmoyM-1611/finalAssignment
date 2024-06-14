import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { AuthContext } from '../providers/AuthProviders';
import {  FaBook, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const [role, setRole] = useState('student');
    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.role) setRole(data.role);
                console.log(role);
            })
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content">
                        {/* Sidebar content here */}

                        {
                            role === 'admin' ?
                                <>

                                    <li><NavLink to='/dashboard/manageClasses'><FaBook></FaBook>Manage Classes</NavLink></li>
                                    <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>

                                </>

                                : role === 'instructor' ?
                                    <>
                                        <li><NavLink to='/dashboard/addAClass'><FaBook></FaBook>Add A class</NavLink></li>
                                        <li><NavLink to='/dashboard/myClasses'><FaUsers></FaUsers> My Classes</NavLink></li>

                                    </>
                                    :


                                    <>
                                        <li><NavLink to='/dashboard/selectedClass'><FaBook></FaBook>My Selected Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/enrolledClass'><FaUsers></FaUsers> My enrolled Classes</NavLink></li>
                                    </>


                        }




                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;