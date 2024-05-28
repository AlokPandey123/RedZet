import React, { useEffect } from "react";
import Hero from "../components/Hero";
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
            <Hero video={backgroundVideo} background="" img="" text1="Red" text2="Zet" text3=" Incense Stick" />
            <div className="bg-base-100 shadow-xl text-center items-center justify-center flex mt-4 mb-5 pb-5 ml-2 mr-2">
                <div className="card-body items-center">
                    <h2 className="card-title text-center">These are Our Aromatic, and Symbolism collections.</h2>
                    <p className="w-full sm:w-2/4">RedZet Essentials Pvt. Ltd. is dedicated to enriching the ambiance of homes
                        through our premium-quality incense products while upholding environmental friendliness
                        and ensuring utmost customer satisfaction.
                    </p>
                </div>
            </div>



            <div className="card lg:card-side flex" data-aos="zoom-in">
                <figure className="productimg lg:w-1/2">
                    <img src={product1} alt="Agarbatti" className="p-1 rounded-4" />
                </figure>
                <div className="lg:w-1/2 flex items-center">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Kanak Premium Agarbatti</h2>
                            <p>
                                Bring elegance and divine fragrances to your surroundings.
                                Fancy Mixed Fragrance: Each stick offers a soothing blend of scents for a peaceful and
                                luxurious atmosphere.
                                Pouch Packaging: Contains 11 incense sticks in a convenient pouch, perfect for home use or
                                travel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:flex lg:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full lg:w-1/2">
                    <img src={product2} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full lg:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Champa fragrance Dhoop Cones</h2>
                            <p>
                                Champa fragrance Dhoop Cones to elevate your sacred space.
                                Champa Fragrance: Mystical aroma known for enchanting and tranquil properties.
                                Box Packaging: Each box contains 10 cones, ensuring freshness and convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side  " data-aos="zoom-in">
                <figure className="productimg lg:w-1/2"><img src={product3} alt="Agarbatti" className="p-1 rounded-4" /></figure>
                <div className="m-auto lg:w-1/2">
                    <div className="card w-full ">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Lavender Dhoop</h2>
                            <p>
                                Elevate your spiritual practices with the soothing aroma of lavender.
                                Lavender Fragrance: Infused with the calming and delightful scent of lavender,
                                promoting relaxation and tranquillity.
                                Box Packaging: 36 grams of high-quality wet dhoop batti neatly packed in a sturdy
                                box to ensure freshness and ease of use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:flex lg:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full lg:w-1/2">
                    <img src={product4} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full lg:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Kanak Premium Agarbatti</h2>
                            <p>
                                Elegance and divine fragrances for your surroundings.
                                Fancy Mixed Fragrance: Each stick emits a harmonious blend of captivating scents, creating
                                a tranquil and luxurious ambiance.
                                Pouch Packaging: Contains 22 incense sticks in a sleek, easy-to-carry pouch, perfect for
                                home use or travel, while preserving their freshness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side  " data-aos="zoom-in">
                <figure className="productimg lg:w-1/2"><img src={product5} alt="Agarbatti" className="p-1 rounded-4" /></figure>
                <div className="m-auto lg:w-1/2">
                    <div className="card w-full ">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Kewda fragrance Dhoop Cones</h2>
                            <p>
                                Kewda fragrance Dhoop Cones for a sensory journey of spiritual bliss.
                                Kewda Fragrance: Captivating scent known for its uplifting qualities.
                                Box Packaging: Each box holds 10 cones, preserving freshness and allure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:flex lg:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full lg:w-1/2">
                    <img src={product6} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full lg:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Mogra Dhoop</h2>
                            <p>
                                Mogra is meticulously crafted to elevate your spiritual practices with
                                the mesmerizing aroma of Mogra flowers. Each box contains 36 grams of high-quality wet
                                dhoop batti, perfect for creating a serene ambiance during your rituals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side  " data-aos="zoom-in">
                <figure className="productimg lg:w-1/2"><img src={product7} alt="Agarbatti" className="p-1 rounded-4" /></figure>
                <div className="m-auto lg:w-1/2">
                    <div className="card w-full ">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Sandalwood Dhoop</h2>
                            <p>
                                Sandalwood is meticulously crafted to elevate your spiritual
                                practices with the soothing aroma of sandalwood. Each box contains 36 grams of high-
                                quality wet dhoop batti, ensuring a serene atmosphere during your rituals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:flex lg:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full lg:w-1/2">
                    <img src={product8} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full lg:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Rose Dhoop</h2>
                            <p>
                                Gulab (Rose) is thoughtfully designed to enhance your spiritual
                                practices with the delicate and enchanting aroma of rose. Each box contains 36 grams of
                                high-quality wet dhoop batti, perfect for creating a serene atmosphere during your rituals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side  " data-aos="zoom-in">
                <figure className="productimg lg:w-1/2"><img src={product9} alt="Agarbatti" className="p-1 rounded-4" /></figure>
                <div className="m-auto lg:w-1/2">
                    <div className="card w-full ">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Gulab fragrance Dhoop Cones</h2>
                            <p>
                                Gulab fragrance Dhoop Cones to elevate your spiritual journey.
                                Gulab Fragrance: Delicate aroma of roses, known for calming and soothing properties.
                                Box Packaging: Each box contains 10 cones, elegantly packaged for freshness and
                                convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card lg:flex lg:flex-row-reverse" data-aos="zoom-in">
                <figure className="productimg w-full lg:w-1/2">
                    <img src={product10} alt="Agarbatti" className="p-1 rounded-4 h-full w-full object-cover" />
                </figure>
                <div className="m-auto w-full lg:w-1/2">
                    <div className="card w-full">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Guggle fragrance Dhoop Cones</h2>
                            <p>
                                Guggle fragrance Dhoop Cones for spiritual transcendence.
                                Guggle Fragrance: Sacred aroma known for purifying and meditative qualities.
                                Box Packaging: Elegant packaging preserves freshness, with 10 cones per box.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side  " data-aos="zoom-in">
                <figure className="productimg lg:w-1/2"><img src={product11} alt="Agarbatti" className="p-1 rounded-4" /></figure>
                <div className="m-auto lg:w-1/2">
                    <div className="card w-full ">
                        <div className="card-body productdes">
                            <h2 className="text-center text-xl font-bold">Beat Mosquito Agarbatti sticks</h2>
                            <p>
                                Beat: Keep mosquitoes away and enhance your space.
                                Each pouch contains 10 Mosquito Agarbatti sticks.
                                Mosquito Repellent: Effectively keeps mosquitoes at bay.
                                Pleasant Fragrance: Releases a mild aroma for a serene atmosphere.
                                Pouch Packaging: Convenient and easy to use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Home;