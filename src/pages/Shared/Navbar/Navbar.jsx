import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    console.log(user);
    const handleLogout = ()=>{
        logOut();
    }
    return (
        <div className="navbar bg-base-200 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                       
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link to='/classes'>Classes</Link></li>
                        {user? <li><Link to='/dashboard'>Dashboard</Link></li>:<></>}
                      
                    </ul>
                </div>
                
                   <img className='w-[80px] h-[80px]' src="pngwing.com.png" alt="" />
                  <div className='flex flex-col gap-y-3'>
                  <Link className=" normal-case text-3xl font-bold ms-0 ps-0">Summer Camp Music School</Link>
                    <p>Explore the world of music!</p>
                  </div>
            
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link to='/'>Home</Link></li>
                       
                       <li><Link to='/instructors'>Instructors</Link></li>
                       <li><Link to='/classes'>Classes</Link></li>
                       {user? <li><Link to='/dashboard'>Dashboard</Link></li>:<></>}
                       
                </ul>
            </div>
            <div className="navbar-end">
                {user? <><img className='h-[50px] w-[50px] rounded-full mx-3' src={user.photoURL} alt="" /></>:<></> }
                {user? <button onClick={handleLogout} className='btn btn-primary'>Logout</button>:
                <Link to='/login' className="btn btn-warning">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;