import { useEffect, useState } from "react";
import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts] = useState(null);

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(products => {
            
            setProducts(products)
        })
    },[])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
            {
                Array.isArray(products) && products.map(product => <Product 
                    key={product._id}
                    product={product}
                    
                    ></Product>)
            }

            
        </div>
    );
};

export default Products;