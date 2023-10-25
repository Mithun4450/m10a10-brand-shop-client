
import { useLoaderData} from "react-router-dom";
import Product from "../Product/Product";



const Products = () => {

    const products = useLoaderData();
    // console.log(products)

  

   

    return (
        <div>
            {
                products.length > 0 ? <>
                 <div className="carousel w-full max-h-screen my-14">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/ad1.png" className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/add2.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/ad3.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                
            </div>

            <div className="w-3/4 md:1/2 mx-auto mb-10">
                <h1 className="text-4xl text-center font-bold">Available Products</h1>
                <p className="text-base text-center ">At Auto Shop, you can get a better deal when you’re buying a luxury car. a wide selection of new and  luxury cars is offered at competitive prices.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
                {
                    Array.isArray(products) && products.map(product => <Product 
                        key={product._id}
                        product={product}
                        
                        ></Product>)
                }

            
            </div> </> : <><h1 className="text-center text-4xl font-bold my-40 decoration-4 ">Product of this brand is not currently available. </h1></>
            }

            
           
        </div>
    );
};

export default Products;