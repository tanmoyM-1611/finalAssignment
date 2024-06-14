// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaUserCheck, FaUserShield } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Allusers = () => {
    const [allusers, setAllUsers] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('https://finalassignment-server.onrender.com/allusers')
            .then(res => res.json())
            .then(data => {
                
              
                setAllUsers(data);
                
                

            });
    }, [allusers]);
    const handleMakeAdmin = user =>{
        fetch(`https://finalassignment-server.onrender.com/allusers/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
               alert('updated');
               navigate('/dashboard/allusers');
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(`https://finalassignment-server.onrender.com/allusers/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
               alert('updated');
               navigate('/dashboard/allusers');
            }
        })
    }
    const handleDelete = user => {
        fetch(`https://finalassignment-server.onrender.com/allusers/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('updated');
               navigate('/dashboard/allusers');
                }
            })
    }

    return (
        <div className="w-full">
           
            <h3 className="text-3xl font-semibold my-4">Total Users: {allusers.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>{user.role === 'instructor' ? 'instructor' :
                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserCheck></FaUserCheck></button>
                                }</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;