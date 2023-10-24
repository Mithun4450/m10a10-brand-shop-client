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
        <div className="hero min-h-screen  my-14">
            <div className="hero-content w-full md:w-4/5" style={{backgroundImage: 'url(/4.png)', borderRadius: '10%', backgroundRepeat: 'no-repeat',  backgroundSize: 'cover'}}>
                
                <div className="card flex-shrink-0 w-full max-w-sm my-5 shadow-2xl ">
                <h1 className="text-3xl font-bold p-4">Please register here!!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                           
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                           
                            <input type="email" name="email" placeholder="E-mail" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                           
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                            {
                                registerError && 
                                <div className="bg-base-100 p-4 text-center w-3/4 rounded-lg mx-auto h-20">
                                     <p className="text-red-600 pt-4 bg-base-100">{registerError}</p>
                                </div>
                                
                               

                            }
                            
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Register</button>
                        </div>
                        
                    </form>
                    <div className="bg-base-100 p-4 text-center w-3/4 rounded-lg mx-auto h-20">
                        <p className="text-center pb-10 font-semibold">Already registered? <br /> Please <span className="text-blue-700 underline"><Link to="/login">Login</Link></span> </p>
                    </div>
                    
                </div>
            </div>
      </div>
    );
};

export default Register;