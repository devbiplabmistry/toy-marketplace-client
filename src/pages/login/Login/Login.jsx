import  { useContext, useState } from 'react';
import { Link,  useNavigate} from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const [error,setError]=useState()
    const {loginWithEmail} =useContext(AuthContext)
    const navigate =useNavigate()
    const handleLogin =(event)=>{
        event.preventDefault()
        const form =event.target;
        const email =form.email.value;
        const password =form.password.value;
        loginWithEmail(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert('You LoggedIn Sucessfully !!!');
            navigate("/");
          })
          .catch((error) => {
            const errorMessage = error.message;
           setError(errorMessage)
          });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col md:flex-row-reverse justify-center">
                <div className="text-center md:text-left mb-4">
                    <h1 className="text-5xl font-bold ">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                    <div className="login p-8 text-center">
                       <p><small>{error}</small></p>
                    </div>
                    <div className="login p-8 text-center">
                        <Link to="/register"><p><small>Are you new in this website ??</small></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;