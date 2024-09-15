import abg_banner from '../../assets/abg_banner.png'
// import banner_img from '../../assets/banner_img.png'
const Banner = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='text-white'>
                <div className="hero bg-base-200">
                    <img className='rounded-xl' src={abg_banner} alt="" />
                    <div className="hero-content ">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold leading-relaxed">
                                Discover an exceptional cooking <br />
                                class tailored for you!
                            </h1>
                            <p className="py-6">
                                Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
                                problems to become an exceptionally well world-class Programmer.
                            </p>
                            <div>
                                <button className="btn bg-green-500 mr-4 rounded-full border-none font-bold">Explore Now</button>
                                <button className="btn btn-ghost border-gray-300 rounded-full font-bold">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;