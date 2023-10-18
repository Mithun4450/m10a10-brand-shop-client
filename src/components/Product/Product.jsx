

const Product = ({product}) => {
    const {name, photo, brandName, type, price, description, rating} = product;
    return (
        <div>
          <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-44 rounded-t-md" src={photo} alt="brand logo" /></figure>
                <div className="card-body w-3/4 mx-auto">
                    <h2 className="card-title text-center font-bold">{name}</h2>
                    <p><span className="font-bold">Brand Name: </span>{brandName}</p>
                    <p><span className="font-bold">Type: </span>{type}</p>
                    <p><span className="font-bold">Price: </span>$<span></span>{price}</p>
                    <p><span className="font-bold">Rating: </span><span>{rating}</span> out of 5</p>
                    <div className="flex items-center gap-6">
                        <button className="btn btn-accent">Details</button>
                        <button className="btn btn-accent">Update</button>
                    </div>

                    
                </div>
          </div>
            
        </div>
    );
};

export default Product;