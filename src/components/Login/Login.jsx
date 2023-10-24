import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle  } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import swal from 'sweetalert';

const Login = () => {

    const [loginError, setLoginError] = useState('')
    const {loginWithEmailPassword, loginWithGoogle, loginWithGithub} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

       

        loginWithEmailPassword(email, password)
            .then(result =>{
                console.log(result.user);
                e.target.reset();
                swal("Good job!","You have successfully logged in!", "success");
                navigate(location?.state? location.state : "/");
            })
            .catch(error =>{
                console.error(error)
                setLoginError(error.message)
            })
        
        
    }

    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result =>{
            console.log(result.user);
            swal("Good job!", "You have successfully logged in!", "success");
            navigate(location?.state? location.state : "/");
        })
        .catch(error =>{
            console.error(error)
        })
    }

    const handleGithubLogin = () =>{
        loginWithGithub()
        .then(result =>{
            console.log(result.user);
            swal("Good job!", "You have successfully logged in!", "success");
            navigate(location?.state? location.state : "/");
        })
        .catch(error =>{
            console.error(error)
        })
    }


    return (
        <div className="hero min-h-screen  my-9" >
            <div className="hero-content w-full md:w-3/4 flex flex-col lg:flex-row " style={{backgroundImage: 'url(/3.png)', borderRadius: '10%', backgroundRepeat: 'no-repeat',  backgroundSize: 'cover'}}>
                <div className="mr-8"> 
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold mb-5">Please login here!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleLogin} className="card-body">
                        
                            <div className="form-control">
                                
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                                {
                                    loginError &&  
                                    <div className="bg-base-100 p-4 text-center w-3/4 rounded-lg mx-auto h-20"><p className="text-red-600 pt-4">{loginError}</p></div>
                                    
                                   

                                }
                                        
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Login</button>
                            </div>

                           
                        </form>

                        <div className="bg-base-100 p-4 text-center w-3/4 rounded-lg mx-auto h-20">
                          <p className="text-center font-semibold text-base pb-10">Are you new here? <br /> Please <span className="text-blue-700 underline"><Link to="/register">Register</Link></span> </p>
                        </div>
                    </div>
                </div>
                


               <div>
                    <div className="form-control mt-6">
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-accent"> <span><FcGoogle className="text-3xl"></FcGoogle></span>Login with Google</button>
                    </div>
                    <div className="form-control mt-6">
                            <button onClick={handleGithubLogin} className="btn btn-outline btn-secondary font-bold "><span><BsGithub className="text-3xl text-black "></BsGithub></span>Login with GitHub</button>
                    </div>
               </div>

            </div>
        </div>
    );
};

export default Login;