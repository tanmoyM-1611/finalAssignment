import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        console.log(data.email, data.password);
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
    }
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });
        })
    }
    const setpassVisible = () => {
        setVisible(!visible);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold my-5">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={visible ? "text" : "password"} {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />
                            <i onClick={setpassVisible}>
                                {visible ? 'Hide' : 'Show'} Password</i>

                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>

                    <p className='ms-5 mb-4'><small>New Here? <Link className='underline' to="/signup">Create an account</Link> </small></p>
                    <div>
                        <div className="divider">OR</div>
                        <div className='text-center my-4'>
                            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                                <FaGoogle></FaGoogle>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;