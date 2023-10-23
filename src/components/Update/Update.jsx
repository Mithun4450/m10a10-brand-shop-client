import { useLoaderData } from "react-router-dom";



const Update = () => {
    const product = useLoaderData();

    return (
        <div>
            <h1>Update product of {product.name}</h1>

            
        </div>
    );
};

export default Update;