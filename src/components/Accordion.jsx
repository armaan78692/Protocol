import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import "./Accordion.css";

const faqData = [
  {
    question: "Are your products HPLC-tested?",
    answer:
      "Yes. Every batch goes through independent HPLC testing and COA documentation before shipping.",
  },
  {
    question: "Can I request a COA before ordering?",
    answer:
      "Absolutely. You can contact our support team and request batch-specific COA documentation.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically dispatched within 24–48 hours depending on verification and packaging.",
  },
  {
    question: "Do you provide WhatsApp support?",
    answer:
      "Yes. We offer WhatsApp support for urgent questions between 9 AM – 6 PM IST.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="faq-container ">

        {/* TOP */}

        <div className="faq-top">

          <span className="faq-pill">
            FAQS
          </span>

          <h2 className="faq-heading">
            Frequently Asked Questions
          </h2>

          <p className="faq-subtext">
            Everything researchers usually ask us before placing an order.
          </p>

        </div>

        {/* ACCORDION */}

        <div className="faq-wrapper">

          {faqData.map((item, index) => (

            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active-faq" : ""
              }`}
            >

              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >

                <span>{item.question}</span>

                <div className="faq-icon">

                  {activeIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}

                </div>

              </button>

              <AnimatePresence>

                {activeIndex === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-wrapper"
                  >

                    <p className="faq-answer">

                      {item.answer}

                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Accordion;