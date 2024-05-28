import React from "react";
import Hero from "../components/Hero";
import background from "../assets/blogBackground.png"
import ganesh from "../assets/whiteGanesh.png"
import BlogCard from "../components/BlogCard";
import blogImage1 from "../assets/blogImage1.jpeg"
import blogImage2 from "../assets/blogImage2.png"
import blogImage3 from "../assets/blogImage3.png"
import blogImage4 from "../assets/blogImage4.png"
import blogImage5 from "../assets/blogImage5.png"
import blogImage6 from "../assets/blogImage6.png"
import blogImage7 from "../assets/blogImage7.png"
import blogImage8 from "../assets/blogImage8.png"



const Blog = () => {
    return (
        <div>
            <Hero background={background} img={ganesh} video="" text3="Our Exclusives" />
            <div className="flex blogContainer1">
                <div className="flex divContainer">
                    <BlogCard image={blogImage1} heading="Fragrance of kindness" content="In the temple of your heart, light the incense of compassion and let it spread the fragrance of love and kindness. " hastag1="#prosparity" hastag2="#Happiness" hastag3="#Peace" />
                    <BlogCard image={blogImage2} heading="Ritual" content="Lighting incense is a ritual that connects us to the divine, creating a space of serenity and reflection. " hastag1="#prosparity" hastag2="#Happiness" hastag3="#Peace" />
                </div>
                <div className="flex divContainer">
                    <BlogCard image={blogImage3} heading="Symbolizes our prayers" content="The rising smoke of the incense stick symbolizes our prayers and aspirations reaching out to the heavens. " hastag1="#prosparity" hastag2="#Happiness" hastag3="#Peace" />
                    <BlogCard image={blogImage4} heading="Material world" content="In every puff of incense smoke, there lies a message of letting go and transcending the material world. " hastag1="#prosparity" hastag2="#Happiness" hastag3="#Peace" />
                </div>
            </div>
            <div className="flex blogContainer2">
                <div className="flex divContainer">
                    <BlogCard image={blogImage5} heading="Serving others" content="As the incense stick diminishes, it teaches us the virtue of selflessness, serving others until our very end. " hastag1="#prosparity" hastag2="#Happiness" hastag3="#Peace" />
                    <BlogCard image={blogImage6} heading="Divine presence" content="Incense sticks are a reminder of the divine presence in every moment, urging us to live with mindfulness and grace. " hastag1="#prosparity" hastag2="#Happiness" hastag3="#Peace" />
                </div>
                <div className="flex divContainer">
                    <BlogCard image={blogImage7} heading="Purity" content="Just as incense sticks burn to give fragrance and create an aura of purity, our actions should lead to the betterment of those around us." hastag1="#prosparity" hastag2="#Happiness" hastag3="#Peace" />

                    <BlogCard image={blogImage8} heading="Our duties" content="The scent of burning incense reminds us of the impermanence of life and the need to perform our duties with sincerity and devotion." hastag1="#prosparity" hastag2="#Happiness" hastag3="#Peace" />
                </div>
            </div>


        </div>
    )
}

export default Blog;