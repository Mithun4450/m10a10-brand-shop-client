import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";


const ProductDetails = () => {
    const details = useLoaderData();
    const {_id, name, photo, brandName, type, price, description, rating} = details;
    return (
        <div>
          <div className="card bg-base-100 shadow-xl flex md:flex-row border">
                <figure><img className="w-full h-44 rounded-t-md" src={photo} alt="" /></figure>
                <div className="card-body w-1/4 mx-auto border">
                    <h2 className="card-title text-center font-bold">{name}</h2>
                    <p><span className="font-bold">Brand Name: </span>{brandName}</p>
                    <p><span className="font-bold">Description: </span>{description}</p>
                    <p><span className="font-bold">Type: </span>{type}</p>
                    <p><span className="font-bold">Price: </span>$<span></span>{price}</p>
                    <p><span className="font-bold">Rating: </span><span>{rating}</span> out of 5</p>
                    <div className="flex items-center gap-6">
                        
                        
        
                        <Link to={`/myCart/${_id}`}>
                            <button className="btn btn-accent">Add to Cart</button>
                        </Link>
                        
                    </div>

                    
                </div>
          </div>
            
        </div>
    );
};

export default ProductDetails;