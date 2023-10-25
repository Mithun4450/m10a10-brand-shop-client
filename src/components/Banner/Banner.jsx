
const Banner = () => {
    return (
        <div className="hero min-h-screen mt-14 " style={{backgroundImage: 'url(/banner.png)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to our Auto Shop</h1>
                <h3 className="mb-5 text-3xl font-semibold">Are You looking for a car?</h3>
                <p className="mb-5 text-xl">Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.</p>
                
                </div>
            </div>
        </div>
    );
};

export default Banner;