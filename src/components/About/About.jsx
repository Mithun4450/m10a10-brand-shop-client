

const About = () => {
    return (
        <div className="my-9 shadow-md">
            <div>
                <h1 className="text-5xl font-bold text-center mb-5">About Auto Shop</h1>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/4">
                    <p className="text-justify">The philosophy of establishing Auto Shop is to participate in the socio-economic development of Bangladesh. Auto Shop started as a trading house in the year of 2015 and gradually kept its consistent growth with innovative thinking and possibilities under the creative leadership. Besides trading , Auto Shop started importing and selling cars from Japan and progressively became the market leader in this sector since 2020. The foundation of our business is fast growth, good will and reputation which we have earned through highly dedicated and well-organized management & services. With the passage of time, the group has diversified its business in the different fields and continues to contribute to the socio-economic development of the country.</p>
                </div>
                <div className="lg:w-3/4">
                    <img className="w-full h-3/4" src="/shop.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;