import React, { useEffect } from "react";
import Hero from "../components/Hero";
import background from "../assets/aboutBackground.png"
import ganesh from "../assets/whiteGanesh.png"
import productionImage from "../assets/ProductionImage.png"
import productionImage2 from "../assets/productionImage2.png"
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {
    useEffect(() => {
        AOS.init({

            disable: "phone",
            duration: 700,
        });
    }, []);

    return (
        <div>
            <Hero video="" background={background} img={ganesh} text2="Our Journey at RedZet" />
            <div className="bg-base-100 shadow-xl text-center items-center justify-center flex mt-4 mb-5 pb-5 ml-2 mr-2" data-aos="zoom-in">
                <div className="card-body items-center">
                    <h1 className="text-2xl font-bold">Our History</h1>
                    <p className="w-full sm:w-2/4" id="content">
                        In 2017, our journey began with the establishment of our first manufacturing plant on Raebareli Road in Lucknow under the venture company Shri Krishna Industries, marking our commitment to excellence in the incense industry.
                        Since 2024, RedZet Essentials Pvt. Ltd. has achieved significant milestones. Our strategic expansion into key cities like Faizabad, Gonda, and Ambedkar Nagar has strengthened our distribution network, enabling us to reach more customers effectively.
                        At RedZet Essentials, we pride ourselves on our innovative product offerings, including premium agarbatti, mosquito agarbatti, wet dhoopwatti, and dry dhoopcone. All our products are meticulously tested for environmental safety and superior fragrance delivery. With a goal to reach 10 lakh households in the upcoming quarter, we are dedicated to setting new benchmarks in product quality, innovation, and customer trust within the incense industry.

                    </p>
                </div>
            </div>


            <div className="bg-base-100 shadow-xl text-center items-center justify-center flex mt-4 mb-5 pb-5 ml-2 mr-2" data-aos="zoom-in">
                <div className="card-body items-center">
                    <h1 className="text-2xl font-bold">Massage from Director</h1>
                    <p className="w-full sm:w-2/4"id="content" >
                        Dear Valued Customers,
                        We are delighted to bring you RedZet Essentials, a brand committed to excellence in
                        providing premium-quality incense products that enrich your spiritual experiences. Our
                        journey began with a vision to create products that enhance the ambiance of homes while
                        upholding environmental sustainability and customer satisfaction.
                        At RedZet, we blend tradition with innovation, offering a range of Agarbattis, wet
                        dhoopwatti, and dhoopcone meticulously crafted for your rituals and daily prayers. Each
                        product is designed to deliver superior fragrances that elevate your spiritual moments.
                        We invite you to explore our offerings and experience the essence of purity and devotion
                        with RedZet Essentials.
                        With warm regards,


                    </p>
                    <h2 className="font-bold"><span>Director Mr.Sumit Kumar</span> <span className="ml-20">Director
                        Mr. A. K. Asthana</span>
                        
                    </h2>
                </div>
            </div>
            
            <div className="card lg:card-side flex" data-aos="zoom-in-up">
                <figure className="productimg lg:w-1/2">
                    <img src={productionImage} alt="Agarbatti" className="p-1 rounded-4" />
                </figure>
                <div className="lg:w-1/2 flex items-center">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Our Mission</h2>
                            <p>
                            To enhance the ambiance of homes with premium-quality incense products while
                            prioritizing environmental friendliness and customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:flex lg:flex-row-reverse" data-aos="zoom-in-up">
                <figure className="productimg w-full lg:w-1/2">
                    <img src={productionImage2} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full lg:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">What Sets Us Apart</h2>
                            <p>
                            The Redzet Empowerment Initiative is designed to provide aspiring entrepreneurs and artisans with the tools, resources, and mentorship needed to turn their passion for incense making into a thriving business. Through a combination of training workshops, mentorship programs, and financial support.Specialization in premium agarbatti, mosquito agarbatti, dhoopwatti, and dhoopcone
                            with top-class fragrances.
                            Manufacturing plant located in Lucknow, Uttar Pradesh, ensuring quality control.
                            Distribution network in key cities like Faizabad, Gonda, and Ambedkar Nagar.
                            Goal of reaching 10 lakh households in the upcoming quarter, emphasizing wide-scale
                            accessibility.
                            Focus on environmentally friendly products, tested for safety and quality assurance.
                            Motto: Setting benchmarks in quality and trust within the incense industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            


    



        </div>



    )
}

export default About;