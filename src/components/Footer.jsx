import React, { useState } from "react"; // Added useState
import { motion, AnimatePresence } from "framer-motion"; // Added for animations
import { Mail, MessageCircle, ShieldCheck, Globe, FileText, Box, X } from "lucide-react";
import './Footer.css'
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle chat window

  const sources = [
    "Whatsapp"
  ];

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* TOP TIER: Trust Badges */}
        {/* <div className="footer-badges bg-black rounded-2xl">
          <div className="badge-pill"><span className="text-green-400"><ShieldCheck size={14} /></span> COA Verified</div>
          <div className="badge-pill"><span className="text-blue-500"><Globe size={14} /></span> GMP Sourced</div>
          <div className="badge-pill"><span className="text-blue-300"><FileText size={14} /></span> HPLC Tested</div>
        </div> */}

        {/* MIDDLE TIER: Main Links */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              {/* <Box className="logo-icon" size={24} /> */}
              <Link to="/">
              <span className="cursor-pointer">Protocol<span className="dot">.</span></span>
              </Link>
            </div>
            <p className="brand-desc">
            UK's trusted research peptide source. HPLC-verified, COA-backed formulations supplied directly from GMP-certified manufacturers.            </p>
            <div className="contact-links">
              <a href="mailto:support@protocollabs.uk"><Mail size={16} /> support@protocollabs.uk</a>
              <a href="https://wa.me/919289449368?text=Hi%20Protocol,%20I%20would%20like%20to%20know%20more%20about%20this%20product."
      target="_blank"><MessageCircle size={16} /> WhatsApp </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4 >COMPANY</h4>
            <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/catalogue"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Catalogue
              </NavLink>

              {/* <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Reviews
              </NavLink> */}

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/support"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Support
              </NavLink>

          </div>

          {/* Legal Column */}
          <div className="footer-col">
            <h4>LEGAL</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col ">
            <h4>QUICK LINKS</h4>
           <ul>
              <li>
                <a
                  href="https://wa.me/919289449368?text=Hi%20Protocol,%20I%20would%20like%20to%20know%20more%20about%20this%20product."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Support
                </a>
              </li>
              <li><a href="mailto:support@protocollabs.uk">Mail Us</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM TIER: Copyright */}
        <div className="footer-bottom">
          <p>© 2026 Protocol. All rights reserved.</p>
          <p className="disclaimer-mini">
            Research Use Disclaimer: All products are for laboratory research purposes only. Not for human use.
          </p>
        </div>
      </div>

      {/* SUPPORT WIDGET WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="support-window"
          >
            <div className="support-header">
              <div className="support-header-info">
                <div className="header-icon-circle">
                  <MessageCircle size={20} fill="white" />
                </div>
                <div>
                  <h4>Protocol Support</h4>
                  <p>Typically replies within minut...</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>

            <div className="support-body">
              <p className="survey-question">Before we chat — how did you find us? *</p>
              <div className="source-list">
                {sources.map((source) => (
                  <button key={source} onClick={()=>  window.open(
        "https://wa.me/919289449368?text=Hi%20Protocol,%20I%20would%20like%20to%20know%20more%20about%20your%20research%20products.",
        "_blank"
      )} key={source} className="source-option">
                    {source}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button - Now acts as a toggle */}
      <div 
        className={`whatsapp-float block sm:hidden ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} color="white" /> : <MessageCircle size={28} fill="white" color="white" />}
      </div>
    </footer>
  );
};

export default Footer;