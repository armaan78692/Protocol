import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Star, MessageCircle, TriangleAlert } from "lucide-react";
import './Testimonials.css'

const reviews = [
  {
    user: "Frosty-Ad-9691",
    initial: "F",
    color: "bg-[#3b82f6]",
    text: '"Not gonna lie, I\'ve seen really mindblowing progress. Dropped tons of fat and health feels much more under control. Sugar levels way better. Friends noticed — one jumped on it too. RetraLabs peps are really genuine."',
    subtext: "Retatrutide · via r/retralabs",
  },
  {
    user: "Affectionate_Fox_31",
    initial: "A",
    color: "bg-[#10b981]",
    text: '"I was very skeptical — had already been scammed by a fake online seller (fake vials, wasted ~7k). After checking proof from another user, I took the gamble. Quality is absolutely legit."',
    subtext: "Retatrutide · via r/retralabs",
  },
];

const Testimonials = () => {
  const navigate = useNavigate()
  return (
    <>
    <section className="testimonial-section">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div id="header-content" className="text-center mb-12">
          <p id="why-small-tag">THE INTERNET AGREES</p>
          <h2 id="why-main-heading">Don't Take Our Word For It.</h2>
          <p id="why-subtext">Real researchers. Real results. Zero paid promotions.</p>

        </div>

        {/* Grid */}
        <div id="grid-section"  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="testimonial-card"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${review.color}`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#071028] text-sm">{review.user}</h4>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <div className="reddit-tag">
                  <MessageCircle size={12} className="mt-0.5" />
                  <span>Reddit</span>
                </div>
              </div>

              <p className="testimonial-text">{review.text}</p>
              
              <div className="border-t border-gray-100 pt-4 mt-6">
                <p className="testimonial-sub">{review.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="field-report-btn">
            See Field Reports <span>→</span>
          </button>
        </div>
      </div>
     {/* disclaimer section  */}

        

    </section>

    <section className="disclaimer-section">
      <div className="disclaimer-container">
        {/* Icon Column */}
        <div className="disclaimer-icon-wrapper">
          <div className="disclaimer-icon-box text-center">
            <TriangleAlert size={20} strokeWidth={2.5} />
          </div>
        </div>

        {/* Text Column */}
        <div className="disclaimer-content">
          <h3 className="disclaimer-title text-center">Heads Up — Research Use Only.</h3>
          <p className="disclaimer-text text-center">
            All Protocol formulations are intended solely for in vitro research and analytical applications. Not approved for human or veterinary use. By placing an order, you confirm you are a qualified researcher operating in compliance with applicable regulations. 
            <br /><br />
            Not for Human Use          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;