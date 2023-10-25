import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';




const Update = () => {
    
    const product = useLoaderData();

    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        
        console.log(name, photo, brandName, type, price, description, rating);
        const updatedProduct = {name, photo, brandName, type, price, description, rating};

        fetch(`https://m10a10-brand-shop-server.vercel.app/products/productWise/${product._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                

                if(data.modifiedCount > 0){
                    
                    swal("Good job!","You have successfully updated product!", "success");

                    form.reset();

                   

                
                }
                
            })

    }

    return (
        <div>
            

            <div className="hero min-h-screen bg-base-200 w-4/5 md:w-3/4 mx-auto my-20 shadow-2xl rounded-2xl ">
                    
                    <div className="card flex-shrink-0 w-4/5 md:w-3/4 shadow-2xl bg-base-100 p-8 my-8 md:my-20">
                        <h1 className="text-3xl text-center">Update Product Information  </h1>
                        <form onSubmit={handleUpdateProduct} className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Product Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={product.name} className="input input-bordered "  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Image</span>
                                </label>
                                <input type="text" name="photo" defaultValue={product.photo} className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Brand Name</span>
                                </label>
                                <input type="text" name="brandName" defaultValue={product.brandName} className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Type</span>
                                </label>
                                <input type="text" name="type" defaultValue={product.type} className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={product.price} className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold p-4">Short description</span>
                                </label>
                                <textarea className="border p-5 rounded-xl" name="description" defaultValue={product.description} id="" cols="20" rows="10"></textarea>
                            
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Rating</span>
                                </label>
                                <input type="text" name="rating" defaultValue={product.rating} placeholder="Rate out of 5" className="input input-bordered" />
                                
                            </div>
                            
                            <div className="form-control mt-6">
                            <button className="btn btn-accent text-base md:text-lg font-bold">Update Product</button>
                            </div>
                        </form>
                    </div>
                

               
            </div>
            

            
        </div>
    );
};

export default Update;