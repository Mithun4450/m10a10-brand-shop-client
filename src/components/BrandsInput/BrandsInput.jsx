import { useState, useEffect } from "react";


const BrandsInput = () => {

    const [brands, setBrands] = useState(null);
    

    useEffect(() =>{
        fetch('https://m10a10-brand-shop-server.vercel.app/brands')
        .then(res =>res.json())
        .then(brands => {
            
            setBrands(brands)
            console.log(brands)
        })
    },[])

    const handleDelete = _id =>{
        

        fetch(`https://m10a10-brand-shop-server.vercel.app/brands/${_id}`, {
            method: 'DELETE'
        })
            .then(res =>res.json())
            .then(data =>console.log(data))
    }
    



    const handleBrandsSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(name, photo)

        const brand = {name, photo};
        
        fetch('https://m10a10-brand-shop-server.vercel.app/brands', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(brand)
      
          })
            .then(res => res.json())
            .then(data =>{
              setBrands(data)
      
              if(data.insertedId){
                alert('Brand added successfully');
                form.reset();
              }
            })
        }
    
    return (
       
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    {
                        Array.isArray(brands) && brands.map(brand => <p key={brand._id}><li key={brand._id} >{brand.name}</li> <button onClick={() => handleDelete (brand._id)} >X</button></p>
                        
                        )
                    }
                    
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleBrandsSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Brand name" className="input input-bordered"  />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="URL" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>

               
            </div>
            
        
    );
};

export default BrandsInput;