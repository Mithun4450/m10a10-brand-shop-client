import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";


const ProductDetails = () => {
    const navigate = useNavigate();

    const details = useLoaderData();
    const {_id, name, photo, brandName, type, price, description, rating} = details;
    
    const handleAddToCart = () =>{
        
        const cart = {name, photo, brandName, type, price, description, rating};
        
        fetch('https://m10a10-brand-shop-server.vercel.app/carts', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(cart)
      
          })
            .then(res => res.json())
            .then(data =>{
              console.log(data)
      
              if(data.insertedId){
                swal("Good job!","You have successfully added to the cart!", "success");
                navigate("/myCart")
              }
            })
    }
    
    
    
    
    
    
    return (
        
          <div className="card bg-base-100 shadow-xl flex flex-col md:flex-row my-20 ">
            <div className=" w-full md:w-1/2 rounded-t-2xl md:rounded-l-2xl">
              <img className="w-full h-full rounded-t-2xl md:rounded-l-2xl" src={photo} alt="" />
            </div>
                
            <div className="card-body w-full md:w-1/2 mx-auto rounded-b-2xl md:rounded-r-2xl ">
                <h2 className="card-title text-center font-bold">{name}</h2>
                <p><span className="font-bold">Brand Name: </span>{brandName}</p>
                <p><span className="font-bold">Description: </span>{description}</p>
                <p><span className="font-bold">Type: </span>{type}</p>
                <p><span className="font-bold">Price: </span>$<span></span>{price}</p>
                <p><span className="font-bold">Rating: </span><span>{rating}</span> out of 5</p>
                
                
                <button onClick={handleAddToCart} className="btn btn-accent w-1/2 ">Add to Cart</button>
                
            </div>
          </div>
            
        
    );
};

export default ProductDetails;