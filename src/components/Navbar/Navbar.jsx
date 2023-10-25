import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";




const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/addProduct">ADD PRODUCT</NavLink></li>
        <li><NavLink to="/myCart">MY CART</NavLink></li>
        
        
        
    </>

    const { logOut, user} = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () =>{
        logOut()
          .then()
          .catch()
    }
        
    
    return (
        <div className="navbar bg-base-100 py-4 flex flex-col md:flex-row border-b ">
            
           
            <div className="w-3/4">
                <div className="navbar-start  font-semibold flex justify-center  items-center w-full  lg:w-1/4">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className="w-16" src="/carlogo.png" alt="" /><span>AUTO SHOP</span></a>
                </div>


                <div className="navbar-end hidden lg:flex justify-center font-semibold w-3/4">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
            </div>
           
            
            <div className="space-x-3 font-semibold w-full flex justify-center lg:w-1/4">
                {
                    user? <>
                    <p className="uppercase">{user.displayName}</p>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        {
                           user.photoURL? <img src={user.photoURL} /> : <img src="/public/avater.png"></img>

                        }
                        </div>
                    </label>
                    <NavLink className="uppercase" onClick={handleLogOut}>Logout</NavLink>
                     </>: <>
                     <NavLink className="uppercase" to="/login">Login</NavLink>
                     
                     </>
                    
                }
      
            </div>
        </div>
    );
};

export default Navbar;