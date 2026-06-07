import React from 'react';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import './Reviews.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {

  const navigate = useNavigate()

  // Testimonial data based on your reference image
  const testimonials = [
    {
      id: 1,
      mainText: "The quality is top-notch!",
      tag: "RETATRUTIDE",
      image: "https://placeholder.com/whatsapp1.png" 
    },
    {
      id: 2,
      mainText: "Down 2 kgs in a week",
      tag: "RETATRUTIDE",
      image: "https://placeholder.com/whatsapp2.png"
    },
    {
      id: 3,
      mainText: "It's really effective",
      tag: "RETATRUTIDE",
      image: "https://placeholder.com/whatsapp3.png"
    },
    {
      id: 4,
      mainText: "Bro the stuff is bomb",
      tag: "RETATRUTIDE",
      image: "https://placeholder.com/whatsapp4.png"
    },
    {
      id: 5,
      mainText: "Food suppression is crazy bro",
      tag: "RETATRUTIDE",
      image: "https://placeholder.com/whatsapp5.png"
    },
    {
      id: 6,
      mainText: "reta is sort of magical now",
      tag: "RETATRUTIDE",
      image: "https://placeholder.com/whatsapp6.png"
    }
  ];

  return (
    <>
      <Navbar/>
        <div className="reviews-page-wrapper">
          <section className="feedback-hero-section">
            <div className="container-custom flex flex-col items-center text-center">
              
              {/* Top Floating Badge */}
              <div className="feedback-top-badge mb-8">
                <MessageCircle size={14} className="mr-2" />
                RESEARCHER FEEDBACK · UNEDITED
              </div>

              {/* Main Heading */}
              <h2 className="feedback-title">
                What Researchers Are <br />
                <span className="text-purple-gradient">Observing in the Field.</span>
              </h2>

              {/* Description Text */}
              <div className="feedback-description-container">
                <p className="feedback-description">
                  The following are unedited communications from independent researchers who have sourced 
                  compounds from RetraLabs for in-vitro and analytical study. All conversations are shared 
                  with consent. Names and numbers blurred for privacy.
                </p>
                
                <p className="feedback-disclaimer">
                  These are anecdotal research observations only. Not intended as medical claims. All 
                  products are strictly for research use — not for human consumption.
                </p>
              </div>

              {/* Bottom Trust Badges */}
              <div className="trust-badges-row mb-16">
                <div className="trust-pill">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  3,000+ Research Orders
                </div>
                <div className="trust-pill">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  HPLC-Verified Compounds
                </div>
                <div className="trust-pill">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  GMP-Certified Source
                </div>
              </div>

              {/* NEW TESTIMONIAL GRID SECTION */}
              <div className="testimonial-grid w-full">
                {testimonials.map((item) => (
                  <div key={item.id} className="chat-card">
                    <div className="chat-image-container">
                      <div className="placeholder-screenshot">
                        <span className="text-xs text-gray-400">Screenshot {item.id}</span>
                      </div>
                    </div>
                    <div className="chat-footer">
                      <span className="quote-text">"{item.mainText}"</span>
                      <span className="product-pill">{item.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* <span className='screenshot'>
                <p className='text-gray-500 mt-8 text-sm'>
                  Tap any screenshot to view full size · Names/numbers blurred for privacy · Shared as anecdotal research observations only — not medical claims
                </p>
              </span> */}
            </div>
          </section>

        </div>
      <Footer/>
    </>
    
  );
};

export default Reviews;