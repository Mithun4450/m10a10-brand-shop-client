

const Brand = ({brand}) => {
    const {name, photo} = brand;
    return (
        <div>
          <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-60 h-36 mt-6" src={photo} alt="brand logo" /></figure>
                <div className="card-body mx-auto">
                    <h2 className="card-title text-center uppercase">{name}</h2>
                    
                </div>
          </div>
            
        </div>
    );
};

export default Brand;