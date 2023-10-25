
import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';


const MyCart = () => {
    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts);
    console.log(loadedCarts)

    const handleCartDelete = _id =>{

        fetch(`https://m10a10-brand-shop-server.vercel.app/carts/${_id}`, {
            method: 'DELETE'
        })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    swal("Done!","You have deleted the product from the cart!", "success");
                    const remaining = carts.filter(cart => cart._id !== _id);
                    setCarts(remaining);
                }
            })

    }

    return (
        <div>
            

            <div className="mx-auto w-full md:w-1/2 my-14">
                <div >
                    <h1 className=" text-lg md:text-2xl text-center font-bold mb-5">Products in the cart</h1>
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="text-sm md:text-lg">
                            <th></th>
                            <th>Products Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row  */}

                        {
                            carts.map((cart, index) =><tr key={cart._id}>
                                <th>{index + 1}</th>
                                <td>{cart.name}</td>
                                <td>{cart.brandName}</td>
                                <td><span>$</span>{cart.price}</td>
                                <td>
                                    <button onClick={() => handleCartDelete(cart._id)} className="btn btn-xs btn-square btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>


                              


                              </tr>
                              
                              )
                        }
                        
                        </tbody>
                    </table>
                </div>



            </div>
            
            
            
        </div>
    );
};

export default MyCart;