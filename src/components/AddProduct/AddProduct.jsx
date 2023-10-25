import { useState, useEffect } from "react";
import swal from 'sweetalert';

const AddProduct = () => {
    const [products, setProducts] = useState(null);
    

    useEffect(() =>{
        fetch('https://m10a10-brand-shop-server.vercel.app/products')
        .then(res =>res.json())
        .then(products => {
            
            setProducts(products)
            console.log(products)
        })
    },[])

    const handleDelete = _id =>{
        

        fetch(`https://m10a10-brand-shop-server.vercel.app/products/${_id}`, {
            method: 'DELETE'
        })
            .then(res =>res.json())
            .then(data =>console.log(data))
    }
    



    const handleProductSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        console.log(name, photo)

        const product = {name, photo, brandName, type, price, description, rating};
        
        fetch('https://m10a10-brand-shop-server.vercel.app/products', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
      
          })
            .then(res => res.json())
            .then(data =>{
              setProducts(data)
      
              if(data.insertedId){
                swal("Good job!","You have successfully added product!", "success");
                form.reset();
              }
            })
    }
    
    return (
       
            <div className="hero min-h-screen  my-14" style={{backgroundImage: 'url(/3.png)'}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    {/* {
                        Array.isArray(products) && products.map(product => <p key={product._id}><li key={product._id} >{product.name}</li> <button onClick={() => handleDelete (product._id)} >X</button></p>
                        
                        )
                    } */}
                    
                    </div>
                    <div className="card flex-shrink-0 w-full ">
                    <form onSubmit={handleProductSubmit} className="card-body ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="form-control ">
                               
                                <input type="text" name="name" placeholder="Product name" className="input input-bordered"  />
                            </div>

                            <div className="form-control ">
                                
                                <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                               
                                <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                
                                <input type="text" name="type" placeholder="Type" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                
                                <input type="text" name="price" placeholder="Price in USD" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                
                                <input type="text" name="rating" placeholder="Rate out of 5" className="input input-bordered" />
                                
                            </div>
                        </div>
                        <div className="form-control">
                           
                            <textarea className="border p-4 rounded-lg" name="description" placeholder="Write short description here...." id="" cols="20" rows="5"></textarea>
                           
                        </div>

                        
                        
                        <div className="form-control mt-6">
                        <button className="btn btn-accent lg:w-1/2 mx-auto">Add Product</button>
                        </div>
                    </form>
                    </div>
                </div>

               
            </div>
            
        
    );
};

export default AddProduct;