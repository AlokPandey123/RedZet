import React, { useEffect } from "react";
import background from "../assets/contactBackground.jpg"
import ganesh from "../assets/whiteGanesh.png"
import Hero from "../components/Hero";
import contactImage1 from "../assets/contactImage1.png"
import community from "../assets/community.png"
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
    useEffect(() => {
        AOS.init({

            disable: "phone",
            duration: 700,
        });
    }, []);
    return (
        <div>
            <Hero video="" background={background} img={ganesh} text1="Connect with us and Start new journy with us" />
            <div className="card md:card-side flex" data-aos="zoom-in">
                <figure className="productimg md:w-1/2">
                    <img src={contactImage1} alt="Agarbatti" className="p-1 rounded-4" />
                </figure>
                <div className="md:w-1/2 flex items-center">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Contact Information</h2>
                            <div className="flex justify-between ">
                                <div className=" m-4">
                                    <h2>
                                        Email: rz.essentials@redzet.in
                                    </h2>
                                    <h2>
                                        HR email: hr@redzet.in
                                    </h2>
                                    <h2>
                                        +91 93913 49781
                                    </h2>

                                </div>
                                <div className="gap-10 m-4">
                                    <h2>
                                        Timings: 9:00 am - 5:30 pm [Mon-Sat]
                                    </h2>

                                    <h2>
                                        For Bulk orders,
                                    </h2>

                                    <h2>
                                        Address: 545Ka/KP076 Para Rajajipuram 
                                        <br />Lucknow 226017
                                    </h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card md:flex md:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full md:w-1/2">
                    <img src={community} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full md:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Join Our Community</h2>
                            <Link to="https://forms.gle/7FppDZNXPBFhQLvR6" className="m-auto mt-10" target="_blank">
                            <button class="btn btn-active btn-secondary bg-blue-600 text-white hover:bg-blue-400">Join Now</button>
                            </Link>
                        </div>
                    </div>
                </div>





            </div>






        </div>
    )
}

export default Contact;
