import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

const Education = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div id="education" className=" mx-auto py-16 px-6 text-center bg-gray-900">
            <h2 className="text-5xl font-extrabold text-white mb-12">Education</h2>
            <Slider {...settings} className="max-w-3xl mx-auto">
                {/* BSc Record */}
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-3xl font-bold text-white mb-4">Bachelor of Science (BSc)</h3>
                    <p className="text-lg text-white mb-2"><strong>University:</strong> Daffodil International University</p>
                    <p className="text-lg text-white mb-2"><strong>Field of Study:</strong> Software Engineering</p>
                    <p className="text-lg text-white mb-2"><strong>Year:</strong> 2024 - 2028 (Expected)</p>
                    
                </div>

                {/* HSC Record */}
                <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 p-8 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-3xl font-bold text-white mb-4">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-lg text-white mb-2"><strong>Institute:</strong> Hamdard Public College</p>
                    <p className="text-lg text-white mb-2"><strong>Field of Study:</strong> Science</p>
                    <p className="text-lg text-white mb-2"><strong>Year:</strong> 2021 - 2022</p>
                   
                </div>
            </Slider>
        </div>
    );
};

export default Education;
