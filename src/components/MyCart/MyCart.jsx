
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';


const MyCart = () => {
    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts);
    console.log(loadedCarts)

 

    const handleCartDelete = _id =>{

        fetch(`http://localhost:5000/carts/${_id}`, {
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
            

            <div className="mx-auto w-1/4">
                <div >
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
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
                                <td>{cart.price}</td>
                                <td><button onClick={() => handleCartDelete(cart._id)} className="btn btn-error btn-sm">Delete</button></td>
                              </tr>)
                        }
                        
                        </tbody>
                    </table>
                </div>



            </div>
            
            
            
        </div>
    );
};

export default MyCart;