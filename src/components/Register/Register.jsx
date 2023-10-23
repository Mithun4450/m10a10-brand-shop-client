import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";



const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const {createUser, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        setRegisterError('');

        if(password.length < 6){
            setRegisterError('Password must be of 6 characters or longer.')
            return
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Password must have at least one capital letter.')
            return
        }
        else if(!/[@$!%*?&]/.test(password)){
            setRegisterError('Password must have at least one special character.')
            return
        }




        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                swal("Good job!", "You have successfully registered! Please login now!", "success");

                updateProfile(result.user, {displayName: name, photoURL:photo})
                    .then(() => console.log('Profile updated'))
                    .catch(error => console.log(error))

               logOut();
               navigate("/login");
            })
            .catch(error =>{
                console.error(error)
                setRegisterError(error.message)
                
            })
        
    }
    

    return (
        <div className="hero min-h-screen bg-base-200 my-9">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Please register here!!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            {
                                registerError && <p className="text-red-600 pt-4">{registerError}</p>

                            }
                            
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        
                    </form>
                    <p className="text-center pb-10">Already registered? Please <span className="text-blue-700 underline"><Link to="/login">Login</Link></span> </p>
                </div>
            </div>
      </div>
    );
};

export default Register;