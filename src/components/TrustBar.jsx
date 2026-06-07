import React from "react"
import "./TrustBar.css"
import { Pyramid } from "lucide-react"

const stats = [
  {
    number: "3000+",
    text: "ORDERS SHIPPED",
  },

  {
    number: "99.8%+",
    text: "PURITY GUARANTEED",
  },

  {
    number: "48h",
    text: "AVG DISPATCH",
  },

  {
    number: "GMP",
    text: "CERTIFIED SOURCE",
  },

  {
    number: "100%",
    text: "HPLC-TESTED",
  },

  {
    number: "0",
    text: "MIDDLEMEN. EVER.",
  },
]

const TrustBar = () => {
  return (

    <section
      id="sec-marquee"
      className="relative z-20 w-full border-t border-white/10 border-b  border-white/10 bg-[#020617] overflow-hidden"
    >

      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      {/* MARQUEE */}

      <div className="flex items-center whitespace-nowrap animate-marquee py-5">

        {[...stats, ...stats].map((item, index) => (

          <div
            key={index}
            className="marquee-item"
          >

            {/* NUMBER */}

            <h2
              id="heading-words"
              className="text-white/95 font-bold text-[42px] tracking-[-2px] leading-none"
            >

              {item.number}

            </h2>

            {/* TEXT */}

            <p
              id="sub-word"
              className="text-white/40 text-[12px] tracking-[3px] uppercase font-medium"
            >

              {item.text}

            </p>

            {/* ICON */}

            <div
              id="symbol-shape" className="icons"
            >

              <Pyramid
                size={18}
                strokeWidth={2}
                className="text-cyan-400 opacity-80"
              />

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}

export default TrustBar