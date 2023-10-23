import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";


// https://m10a10-brand-shop-client.web.app/
// https://m10a10-brand-shop-server-r070ket4t-mithun-modaks-projects.vercel.app
// https://m10a10-brand-shop-server-5xcitl8tj-mithun-modaks-projects.vercel.app


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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                Array.isArray(brands) && brands.map(brand => <Brand 
                    key={brand._id}
                    brand={brand}
                    
                    
                    
                ></Brand>)
            }

            
        </div>
    );
};

export default Brands;