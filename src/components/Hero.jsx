import React from "react";



const Hero = (props) => {
    return (

        <div className="hero w-full" style={{ backgroundImage: `url(${props.background})` }}>
            <video autoPlay loop muted id="backgroundVideo">
                <source
                    src={props.video}
                    type="video/mp4"
                />
            </video>
            <div className="hero-content flex-row h-auto">
                <div className="w-[40%]">
                    <img src={props.img} className="max-w-lg rounded-lg max-h-min min-h-40 min-w-full border-none" id="ganeshImage" />
                </div>
                <div className="w-[60%]">
                    <h1 className="sm:text-5xl font-bold text-2xl mb-2 text-center"><span className='text-white'>{props.text1}</span><span className='text-white'>{props.text2}</span><span className="text-white">{props.text3}</span></h1>
                    <span className="text-white" id="heroDesktopText">RedZet Incense sticks knock on the gate of god and ensure permanent happiness and prosperity in life. enhance the ambiance of homes with premium-quality incense products while
                        prioritizing environmental friendliness and customer satisfaction.</span>
                    <span className="text-white" id="heroMobileText">RedZet knock the gate of god and ensure permanent happiness and prosperity.</span>
                </div>
            </div>
        </div>
    )
}

export default Hero;