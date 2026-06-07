import React from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import "./Hero.css"

import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import TrustBar from "./TrustBar"
import ProductCard from "./ProductCard"
import Testimonials from "./Testimonials"
import Footer from "./Footer"
import '../assets/Hero-Banner-01.jpg'
import { Link } from "react-router-dom"

const slides = [
  {
    title1: "India's Only Trusted",
    title2: "Research Peptide",
    title3: "Supplier.",
    desc:
      "Fake vials. Useless compounds. Thousands wasted. We couldn't find a single legitimate peptide supplier in India, so we went directly to GMP manufacturers.",
  },

  {
    title1: "India's Peptide Market",
    title2: "Was a Mess.",
    title3: "We Fixed It.",
    desc:
      "Premium research compounds engineered with precision, purity, and innovation for advanced scientific studies.",
  },

  {
    title1: "Research Grade",
    title2: "Peptides",
    title3: "Done Right.",
    desc:
      "Every batch tested. Every product verified. Every compound sourced with transparency and trust.",
  },
]

const Hero = () => {
    const navigate = useNavigate()
  return (
    <>
            <section
            id="banner-sec"
            className="
            relative

            min-h-[100vh]
            sm:min-h-[100vh]

            bg-[url('./assets/Hero-Banner-01.jpg')]

            bg-cover
            md:bg-cover

            bg-[position:72%_center]
            sm:bg-[position:78%_center]
            md:bg-center

            overflow-hidden
            text-white
            ">        
            
            {/* NAVBAR */}
        <Navbar />

        {/* BACKGROUND GLOW */}

        <div className="absolute inset-0 overflow-hidden">

            <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-blue-500/10 blur-[180px] rounded-full" />

            <div className="absolute bottom-[-10%] right-[0%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-cyan-400/10 blur-[180px] rounded-full" />

        </div>

        {/* MOBILE OVERLAY */}

            <div
            className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/25
            via-black/20
            to-black/30

            md:hidden
            z-[1]
            "
            />

        {/* SWIPER */}

        <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000}
            autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            }}
            loop={true}
            allowTouchMove={false}
            className="h-full"
        >

            {slides.map((slide, index) => (

            <SwiperSlide key={index}>

                {/* HERO CONTENT */}

                <div className="relative z-10 w-full h-full flex items-start justify-start px-5 sm:px-6 lg:px-8">

                    <div className="w-full max-w-[900px] flex flex-col items-center text-center">
                        {/* SMALL TAG */}

                        <p
                            id="research-pep-tag"
                            className="uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-[#875AF1] text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6 font-medium"
                        >

                            Research Grade Peptides

                        </p>

                        {/* HEADING */}

                        <h1 id="heading-tag" className="leading-[0.95] font-bold tracking-[-2px] md:tracking-[-4px] max-w-[95%] lg:max-w-[900px] text-[40px] sm:text-[52px] md:text-[64px] lg:text-[78px]">

                            {slide.title1}

                            <br />

                            <span className="bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent">

                            {slide.title2}

                            </span>

                            <br />

                            {slide.title3}

                        </h1>

                        {/* DESCRIPTION */}

                        <p
                            id="description-cont"
                            className="max-w-[95%] sm:max-w-[620px] lg:max-w-[720px] text-[14px] sm:text-[15px] md:text-[18px] leading-[1.7] text-white/60 mt-5 md:mt-7"
                        >

                            {slide.desc}

                        </p>

                        {/* SMALL TEXT */}

                        <p
                            id="para-static"
                            className="italic text-white/40 text-[12px] sm:text-[13px] md:text-[16px] mt-4"
                        >

                            That's the whole story. Everything else is just good products at honest prices.

                        </p>

                        {/* BUTTONS */}

                        <div id="buttons" className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-7 md:mt-8 w-full sm:w-auto">

                            {/* SHOP BUTTON */}

                            <button onClick={()=> navigate("/catalogue")}
                            id="shop-btn"
                            className="h-[54px] md:h-[58px] w-50 sm:w-[220px] lg:w-[240px] px-6 rounded-2xl bg-white text-purple-500 font-semibold text-[15px] md:text-[16px] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(0,200,255,0.3)]"
                            >

                            Shop the Collection 

                            </button>

                            {/* STORY BUTTON */}

                            <button
                            id="story-btn" onClick={()=> navigate("/about")}
                            className="h-[54px] md:h-[58px] w-50 sm:w-[200px] lg:w-[220px] px-6 rounded-2xl border border-white bg-white/5 text-white text-[15px] md:text-[16px] hover:bg-black/10 transition-all duration-300"
                            >

                            <Link to= '/about'>Our Story</Link> 

                            </button>

                        </div>

                    </div>

                </div>


            </SwiperSlide>

            ))}

        </Swiper>


        </section>
        <TrustBar />
        <ProductCard/>
        <Testimonials/>
        <Footer/>
    </>
  )
}

export default Hero