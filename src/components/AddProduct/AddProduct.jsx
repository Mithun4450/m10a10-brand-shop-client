import { useState, useEffect } from "react";

const AddProduct = () => {
    const [products, setProducts] = useState(null);
    

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(products => {
            
            setProducts(products)
            console.log(products)
        })
    },[])

    const handleDelete = _id =>{
        

        fetch(`http://localhost:5000/products/${_id}`, {
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
        
        fetch('http://localhost:5000/products', {
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
                alert('Product added successfully');
                form.reset();
              }
            })
        }
    
    return (
       
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <div className="text-center lg:text-left">
                    {
                        Array.isArray(products) && products.map(product => <p key={product._id}><li key={product._id} >{product.name}</li> <button onClick={() => handleDelete (product._id)} >X</button></p>
                        
                        )
                    }
                    
                    </div> */}
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleProductSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Product name" className="input input-bordered"  />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered"  />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" name="type" placeholder="Type" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price in USD" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <textarea className="border" name="description" placeholder="Write description here...." id="" cols="20" rows="10"></textarea>
                           
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rate out of 5" className="input input-bordered" />
                            
                        </div>
                        
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Product</button>
                        </div>
                    </form>
                    </div>
                </div>

               
            </div>
            
        
    );
};

export default AddProduct;