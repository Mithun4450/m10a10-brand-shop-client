import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";


const Brands = () => {

    const [brands, setBrands] = useState(null);

    useEffect(() =>{
        fetch('http://localhost:5000/brands')
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