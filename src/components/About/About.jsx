

const About = () => {
    return (
        <div className="my-9 shadow-md rounded-xl p-5 ">
            <div>
                <h1 className="text-3xl font-bold text-center mb-5">About us</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-5  rounded-xl" >
                <div className="lg:w-1/2 rounded-l-xl bg-gray-300 ">
                    <p className="text-justify p-5">The philosophy of establishing Auto Shop is to participate in the socio-economic development of Bangladesh. Auto Shop started as a trading house in the year of 2015 and gradually kept its consistent growth with innovative thinking and possibilities under the creative leadership. Besides trading , Auto Shop started importing and selling cars from Japan and progressively became the market leader in this sector since 2020. The foundation of our business is fast growth, good will and reputation which we have earned through highly dedicated and well-organized management & services. With the passage of time, the group has diversified its business in the different fields and continues to contribute to the socio-economic development of the country.</p>
                </div>
                <div className="lg:w-1/2  ">
                    <img className="w-full rounded-r-xl " src="/shop.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;