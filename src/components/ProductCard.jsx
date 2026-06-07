import React from "react";
import "./ProductCard.css";
import { motion } from "framer-motion";
import {
  FlaskConical,
  ShieldCheck,
  MessageCircleMore,
  CircleCheck,
} from "lucide-react";

const features = [
  {
    icon: <FlaskConical size={22} />,
    title: "HPLC-Verified. Every Batch.",
    desc: "Independent third-party purity testing on every single batch. COA included — not on request, just always.",
    bottom: "✓ 99%+ Purity",
    bg: "bg-white",
    border: "border-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Direct from GMP. No Middlemen.",
    desc: "Certified GMP manufacturing partners. No markup chains. No mystery suppliers. No 'trust me bro' sourcing.",
    bottom: "✓ GMP Certified Source",
    bg: "bg-white",
    border: "border-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: <MessageCircleMore size={22} />,
    title: "Real Humans. Fast Replies.",
    desc: "WhatsApp support with actual people who know the products. No bots. No 5-day email threads. Usually under an hour.",
    bottom: "✓ Response Within 1 Business Day",
    bg: "bg-white",
    border: "border-yellow-50",
    iconColor: "text-yellow-600",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Staggers the cards
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

//stats section
const stats = [
  { value: "3000+", label: "ORDERS SHIPPED" },
  { value: "99.8%+", label: "AVG PURITY" },
  { value: "48h", label: "AVG DISPATCH" },
  { value: "0", label: "MIDDLEMEN" },
];

const ProductCard = () => {
  return (
    <>
      <section id="why-different-section">
        <div className="w-full max-w-[1320px] mx-auto px-5 md:px-8">
          
          {/* TOP CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="top-content"
            className="flex flex-col justify-center items-center text-center mb-16 "
          >
    
            <p id="why-small-tag">What Makes Us Different</p>
            <h2 id="why-main-heading" className="max-w-[1100px] mt-4">
            Because Impure Compounds Don't Belong in Your Research. </h2>
            <p id="why-subtext" className="max-w-[600px]">
            Every formulation we supply is HPLC-verified, COA-backed, and sourced directly              <br />
            from certified GMP manufacturers. Radical standard, we know.
            </p>
          </motion.div>

          {/* GRID */}
          <motion.div
            id="product-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
              justify-items-center
              w-full
              mx-auto
              "
              >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  transition: { duration: 0.5, ease: "easeInOut" } 
                }}
                className={`product-card ${item.bg} ${item.border} border flex flex-col justify-between`}
              >
                <div>
                  <motion.div 
                    // whileHover={{ rotate: -5, scale: 1.1 }}
                    className={`product-icon-box ${item.iconColor}`}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-desc">{item.desc}</p>
                </div>

                <div className="product-bottom">
                  <p id="item-bottom" className="text-black">{item.bottom}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
    {/* stats section  */}
      <section className="stats-section ">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h2 className="stat-value">{stat.value}</h2>
            <p className="stat-label ">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
};

export default ProductCard;