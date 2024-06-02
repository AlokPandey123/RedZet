import React, { useEffect } from "react";
import backgroundVideo from "../assets/gg.mp4"
import product1 from "../assets/product1.jpg"
import product2 from "../assets/product2.jpg"

import product3 from "../assets/product3.jpg"

import product4 from "../assets/product4.jpg"

import product5 from "../assets/product5.jpg"

import product6 from "../assets/product6.jpg"
import product7 from "../assets/product7.jpg"
import product8 from "../assets/product8.jpg"
import product9 from "../assets/product9.jpg"
import product10 from "../assets/product10.jpg"
import product11 from "../assets/product11.jpg"


import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init({

            disable: "phone",
            duration: 700,
        });
    }, []);
    return (
        <div>
            <div className="hero w-full">
                <video autoPlay loop muted id="backgroundVideo">
                    <source
                        src={backgroundVideo}
                        type="video/mp4"
                    />
                </video>
                <div className="hero-content flex-row h-auto">
                    <div className="w-[40%]">
                    </div>
                    <div className="w-[60%]">
                        <h1 className="sm:text-5xl font-bold text-2xl mb-2 text-center"><span className='text-white'>{"Red"}</span><span className='text-white'>{"Zet"}</span><span className="text-white">{" Incense Stick"}</span></h1>
                        <span className="text-white" id="heroDesktopText">RedZet Incense sticks knock on the gate of god and ensure permanent happiness and prosperity in life. enhance the ambiance of homes with premium-quality incense products while
                            prioritizing environmental friendliness and customer satisfaction.</span>
                        <span className="text-white" id="heroMobileText">RedZet knock the gate of god and ensure permanent happiness and prosperity.</span>
                    </div>
                </div>
            </div>



            <div className="bg-base-100 shadow-xl text-center items-center justify-center flex mt-4 mb-5 pb-5 ml-2 mr-2">
                <div className="card-body items-center">
                    <h2 className="card-title text-center">These are Our Aromatic, and Symbolism collections.</h2>
                    <p className="w-full sm:w-2/4">RedZet Essentials Pvt. Ltd. is dedicated to enriching the home ambiance
                        through our premium-quality incense products while upholding environmental friendliness
                        and ensuring utmost customer satisfaction.
                    </p>
                </div>
            </div>


            <div className="card md:card-side flex" data-aos="zoom-in">
                <figure className="productimg md:w-1/2">
                    <img src={product1} alt="Agarbatti" className="p-1 rounded-4" />
                </figure>
                <div className="md:w-1/2 flex items-center">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Kanak Agarbatti</h2>
                            <p>
                                Elegance and divine fragrances for your surroundings.
                                <br /><span className="font-bold">Wood & Rose Fragrance:</span>
                                Each stick emits a harmonious blend of captivating scents, creating
                                a tranquil and luxurious ambiance.
                                <br /><span className="font-bold">Box Packaging:</span>
                                Contains 22 incense sticks in a sleek, easy-to-carry pouch, perfect for
                                home use or travel, while preserving their freshness.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="card md:flex md:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full md:w-1/2">
                    <img src={product4} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full md:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Kanak Agarbatti</h2>
                            <p>
                                Bring elegance and divine fragrances to your surroundings.
                                <br /><span className="font-bold">Rose Fragrance:</span>
                                Each stick offers a soothing blend of scents for a peaceful and
                                luxurious atmosphere.
                                <br /><span className="font-bold">Pouch Packaging:</span>
                                Contains 11 incense sticks in a convenient pouch, perfect for home use or
                                travel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="card md:card-side  " data-aos="zoom-in">
                <figure className="productimg md:w-1/2"><img src={product3} alt="Agarbatti" className="p-1 rounded-4" /></figure>
                <div className="m-auto md:w-1/2">
                    <div className="card w-full ">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Lavender Dhoop</h2>
                            <p>
                                Elevate your spiritual practices with the soothing aroma of lavender.
                                <br /><span className="font-bold">Lavender Fragrance:</span>
                                Infused with the calming and delightful scent of lavender,
                                promoting relaxation and tranquillity.
                                <br /><span className="font-bold">Box Packaging:</span>
                                36 grams of high-quality wet dhoop batti neatly packed in a sturdy
                                box to ensure freshness and ease of use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card md:flex md:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full md:w-1/2">
                    <img src={product6} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full md:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Mogra Dhoop</h2>
                            <p>
                                Mogra is meticulously crafted to elevate your spiritual practices with
                                the mesmerizing aroma of Mogra flowers. Each box contains 36 grams of high-quality wet
                                dhoop batti, perfect for creating a serene ambiance during your rituals.
                                <br /><span className="font-bold"> Mogra Fragrance:</span>
                                Immerse yourself in the enchanting and floral scent of Mogra,
                                known for its calming and uplifting properties.
                                <br /><span className="font-bold">Box Packaging:</span>
                                 Carefully packed in a sturdy box, ensuring freshness and
                                convenience in usage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card md:card-side  " data-aos="zoom-in">
                <figure className="productimg md:w-1/2"><img src={product7} alt="Agarbatti" className="p-1 rounded-4" /></figure>
                <div className="m-auto md:w-1/2">
                    <div className="card w-full ">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Sandalwood Dhoop</h2>
                            <p>
                                Sandalwood is meticulously crafted to elevate your spiritual
                                practices with the soothing aroma of sandalwood. Each box contains 36 grams of high-
                                quality wet dhoop batti, ensuring a serene atmosphere during your rituals.
                                <br /><span className="font-bold">Sandalwood Fragrance:</span>
                                 Experience the calming and earthy scent of sandalwood,
                                promoting tranquillity and relaxation.
                                <br /><span className="font-bold">Box Packaging:</span>
                                 Neatly packed in a sturdy box, ensuring freshness and convenience
                                in use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card md:flex md:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full md:w-1/2">
                    <img src={product8} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full md:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Rose Dhoop</h2>
                            <p>
                                Gulab (Rose) is thoughtfully designed to enhance your spiritual
                                practices with the delicate and enchanting aroma of rose. Each box contains 36 grams of
                                high-quality wet dhoop batti, perfect for creating a serene atmosphere during your rituals.
                                <br /><span className="font-bold">Rose Fragrance:</span>
                                 Indulge in the delightful and romantic scent of rose, promoting a
                                sense of calmness and serenity.
                                <br /><span className="font-bold">Box Packaging:</span>
                                 Carefully packed in a sturdy box, ensuring freshness and
                                convenience in usage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card md:card-side  " data-aos="zoom-in">
                <figure className="productimg md:w-1/2"><img src={product5} alt="Agarbatti" className="p-1 rounded-4" /></figure>
                <div className="m-auto md:w-1/2">
                    <div className="card w-full ">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Kewda fragrance Dhoop Cones</h2>
                            <p>
                                Kewda fragrance Dhoop Cones for a sensory journey of spiritual bliss.
                                <br /><span className="font-bold">Kewda Fragrance:</span>
                                Captivating scent known for its uplifting qualities.
                                <br /><span className="font-bold">Box Packaging:</span>
                                Each box holds 10 cones, preserving freshness and allure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="card md:flex md:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full md:w-1/2">
                    <img src={product2} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full md:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Champa fragrance Dhoop Cones</h2>
                            <p>
                                Champa fragrance Dhoop Cones elevate your sacred space.
                                <br /><span className="font-bold">Champa Fragrance:</span>
                                Mystical aroma known for enchanting and tranquil properties.
                                <br /><span className="font-bold">Box Packaging:</span>
                                Each box contains 10 cones, ensuring freshness and convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="card md:card-side  " data-aos="zoom-in">
                <figure className="productimg md:w-1/2"><img src={product9} alt="Agarbatti" className="p-1 rounded-4" /></figure>
                <div className="m-auto md:w-1/2">
                    <div className="card w-full ">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Gulab fragrance Dhoop Cones</h2>
                            <p>
                                Gulab fragrance Dhoop Cones elevate your spiritual journey.<br />
                                <span className="font-bold">Gulab Fragrance:</span> Delicate aroma of roses, known for calming and soothing properties.
                                <br /> <span className="font-bold"> Box Packaging: </span>
                                Each box contains 10 cones, elegantly packaged for freshness and
                                convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card md:flex md:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full md:w-1/2">
                    <img src={product10} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full md:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Guggle fragrance Dhoop Cones</h2>
                            <p>
                                Guggle fragrance Dhoop Cones for spiritual transcendence.
                                <br /><span className="font-bold">Guggle Fragrance:</span>
                                Sacred aroma known for purifying and meditative qualities.
                                <br /><span className="font-bold">Box Packaging:</span>
                                Elegant packaging preserves freshness, with 10 cones per box.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card md:card-side  " data-aos="zoom-in">
                <figure className="productimg md:w-1/2"><img src={product11} alt="Agarbatti" className="p-1 rounded-4" /></figure>
                <div className="m-auto md:w-1/2">
                    <div className="card w-full ">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Beat Mosquito Agarbatti sticks</h2>
                            <p>
                                <span className="font-bold">Beat:</span>
                                Keep mosquitoes away and enhance your space.
                                Each pouch contains 10 Mosquito Agarbatti sticks.
                                <br /><span className="font-bold">Mosquito Repellent:</span>
                                Effectively keeps mosquitoes at bay.
                                <br /><span className="font-bold">Pleasant Fragrance:</span>
                                Releases a mild aroma for a serene atmosphere.
                                <br /><span className="font-bold">Pouch Packaging:</span>
                                Convenient and easy to use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Home;
