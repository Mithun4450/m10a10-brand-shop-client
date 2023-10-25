import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";




const Brands = () => {

    const [brands, setBrands] = useState(null);
    

    useEffect(() =>{
        fetch('https://m10a10-brand-shop-server.vercel.app/brands')
        .then(res =>res.json())
        .then(brands => {
            
            setBrands(brands)
        })
    },[])
    
    return (
        <div className="my-9 mx-auto">
            <div className="w-1/2 mx-auto text-center">
                <h1 className="text-3xl font-bold mb-2">Our Popular Brands</h1>
                <p className="text-base font-semibold mb-5">To avail the best services in our country we have merged with top brands to provide our clients with international products.</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    Array.isArray(brands) && brands.map(brand => <Brand 
                        key={brand._id}
                        brand={brand}
                        
                        
                        
                    ></Brand>)
                }

            
            </div>
        </div>
        
    );
};

export default Brands;