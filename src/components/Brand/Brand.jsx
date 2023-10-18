

// https://m10a10-brand-shop-client.web.app/
// https://m10a10-brand-shop-server-r070ket4t-mithun-modaks-projects.vercel.app
// https://m10a10-brand-shop-server-5xcitl8tj-mithun-modaks-projects.vercel.app

import { Link } from "react-router-dom";

const Brand = ({brand}) => {
    const {name, photo} = brand;
    return (
        <div>
          <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-60 h-36 mt-6" src={photo} alt="brand logo" /></figure>
                <div className="card-body mx-auto">
                    <h2 className="card-title text-center uppercase">{name}</h2>
                    <Link to="/products"><button>Products</button></Link>
                    
                </div>
          </div>
            
        </div>
    );
};

export default Brand;