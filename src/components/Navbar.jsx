import React, { useState } from "react"

import "./Navbar.css"

import {
  Menu,
  House,
  Box,
  MessageSquare,
  Users,
  CircleQuestionMark,
  FlaskConical,
  Search,
  ShoppingCart,
  ChevronDown,
  X,
} from "lucide-react"

import { motion, AnimatePresence } from "framer-motion"
import { Link, NavLink } from "react-router-dom"
import SearchPanel from "./SearchPanel"
import { useNavigate } from "react-router-dom"
import { useCurrency } from "../context/CurrencyContext"

const Navbar = () => {

  const [currencyOpen, setCurrencyOpen] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

  const [searchOpen, setSearchOpen] = useState(false)

  const[isSearchOpen, setIsSearchOpen] = useState(false)

  const {selectedCurrency, setSelectedCurrency} = useCurrency()

  const navigate = useNavigate()

  const currencies = [
    "US Dollar $",
    "Indian Rupee ₹",
    "Euro €",
    "British Pound £",
    "Australian Dollar A$",   
    "Singapore Dollar S$",
    "Korean Won ₩",
  ]


  return (
    <>
          <SearchPanel
          isOpen={searchOpen}
          setIsOpen={setSearchOpen}
        />
      {/* TOP OFFER BAR */}

      <div className="w-full h-[40px] border-b border-white/10 bg-[#875AF1] flex items-center justify-center fixed top-0 left-0 z-[100]">

        <p className="offer-text
            text-[8px]
            min-[360px]:text-[9px]
            sm:text-[10px]
            md:text-[11px]
            lg:text-[12px]
            text-center
            px-3
            leading-tight
            ">
          HPLC-Verified · COA on Every Order · GMP-Certified Source
        </p>

      </div>

      {/* MAIN NAVBAR */}

      <nav className="fixed top-[40px] flex justify-center left-0 w-full z-[99] border-b border-white/10 bg-[#020617]/70 backdrop-blur-2xl" id="main-navbar">

        <div className="w-full
              max-w-[1500px]
              mx-auto
              px-4
              sm:px-5
              md:px-8
              h-[72px]
              sm:h-[80px]
              flex
              items-center
              justify-between
              gap-3">
          {/* LEFT SIDE */}

          <div className="flex items-center gap-8 xl:gap-14">
            {/* LOGO */}

            <div className="flex items-center gap-4 cursor-pointer">

              {/* <div className="w-[46px] h-[46px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">

                <Box size={20} className="text-[#00c8ff]" />

              </div> */}

              <h1 id="protocol-font" className="text-[18px] font-semibold tracking-tight flex items-center">

                <Link to="/">Protocol</Link> 

                <span id="dot" className="text-[#875AF1]">.</span>

              </h1>

            </div>

            {/* NAV LINKS */}

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <House size={18} />
                Home
              </NavLink>

              <NavLink
                to="/catalogue"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <FlaskConical size={18} />
                Catalogue
              </NavLink>

              {/* <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                 }
              >
                <MessageSquare size={18} />
                Reviews
              </NavLink> */}

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <Users size={18} />
                About
              </NavLink>

              <NavLink
                to="/support"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                <CircleQuestionMark size={18} />
                Support
              </NavLink>

            </div>
          </div>

          {/* RIGHT SIDE */}

            <div className="hidden lg:flex items-center gap-2 2xl:gap-3">
            {/* SEARCH */}

            <button className="icon-btn">
              <div onClick={() => setSearchOpen(true)} className="cursor-pointer">

                <Search size={20} />

              </div>
            </button>

            {/* CURRENCY */}

            <div className= "relative" id="curreny">

              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="nav-btn w-[110px] h-[42px] flex justify-center rounded-xl  border border-white/10 bg-white/5 text-sm flex items-center gap-2"
              >

                {selectedCurrency}

                <ChevronDown
                  size={16}
                  className={`transition-all duration-300 ${
                    currencyOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              {/* DROPDOWN */}

              <AnimatePresence>

                {currencyOpen && (

                  <motion.div

                    initial={{
                      opacity: 0,
                      y: 10,
                      scale: 0.96,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}

                    exit={{
                      opacity: 0,
                      y: 10,
                      scale: 0.96,
                    }}

                    transition={{
                      duration: 0.22,
                    }}
                    
                    id="currency-box"
                    className="absolute top-[55px] right-0 w-[320px] rounded-2xl border border-white/10 bg-[#0b1220]/95 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
                  >

                    {/* HEADER */}

                    <div className="border-b  border-white/10 text-white/40 text-xs tracking-[2px]" id="currency-header">

                      CURRENCY

                    </div>

                    {/* ITEMS */}

                    <div className="currency-items flex flex-col ">

                      {[
                        { label: "US Dollar $", code: "USD" },
                        { label: "Indian Rupee ₹", code: "INR" },
                        { label: "Euro €", code: "EUR" },
                        { label: "British Pound £", code: "GBP" },
                        { label: "Australian Dollar A$", code: "AUD" },
                        { label: "Singapore Dollar S$", code: "SGD" },
                        { label: "Korean Won ₩", code: "KRW" },
                      ].map((currency, index) => (

                      <button
                          key={index}
                          onClick={() => {
                            setSelectedCurrency(currency.code)
                            setCurrencyOpen(false)
                          }}
                          className={`
                            px-5 py-5 text-left transition-all duration-300

                            ${
                              selectedCurrency === currency.code
                                ? "bg-[#875AF1]/20 text-[#b894ff]"
                                : "text-white/80 hover:bg-white/5 hover:text-white"
                            }
                          `}
                      >

                        {currency.label}

                      </button>

))}
                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

            {/* CART */}

            <button onClick={()=> navigate("/catalogue")} className="nav-btn px-5 h-[45px] w-[105px] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center gap-2">

              <ShoppingCart size={18} />

              Cart

            </button>

          </div>

          {/* MOBILE MENU */}

          <AnimatePresence>

                {menuOpen && (

                    <motion.div

                            initial={{
                                opacity:0,
                                x:"100%"
                            }}

                            animate={{
                                opacity:1,
                                x:0
                            }}

                            exit={{
                                opacity:0,
                                x:"100%"
                            }}

                            transition={{
                                duration:0.35
                            }}

                            className="fixed top-0 right-0 w-full h-screen bg-[#9276C2] border-white/10 z-[110] overflow-y-auto"
                            >

                                {/* MOBILE MENU HEADER */}

                            <div className="h-[92px] border-b border-white/10 flex items-center justify-between px-5">
                                {/* LOGO */}

                                <div id="protocol-mobile-sec" className="flex items-center gap-3">

                                    {/* <div className="w-[46px] h-[46px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">

                                    <Box size={20} className="text-[#00c8ff]" />

                                    </div> */}

                                    <h1 className="text-[20px] font-semibold">
                                    Protocol
                                    <span className="text-[#00c8ff]">.</span>
                                    </h1>

                                </div>

                                    {/* CLOSE

                                    <button
                                        onClick={() => setMenuOpen(false)}
                                        className="text-white"
                                    >

                                        <X size={28} />

                                    </button> */}

                            </div>

                            {/* SEARCH */}

                            <div className="search-bar">

                                <div className="h-[50px] rounded-2xl border border-white/10 bg-white/5 flex items-center px-5 gap-4">

                                    <Search size={20} className="text-white/40" />

                                    <input
                                    onClick={()=> setIsSearchOpen(true)}
                                    type="text"
                                    placeholder="Search products..."
                                    className="bg-transparent outline-none border-none w-full text-white placeholder:text-white/40"
                                    />

                                </div>

                            </div>

                            {/* MENU LINKS */}

                        <div className="flex flex-col gap-2 " id="menu-links">

                              <NavLink
                                to="/"
                                className={({ isActive }) =>
                                  isActive
                                    ? "mobile-link active-mobile-link"
                                    : "mobile-link"
                                }
                              >
                                <House size={22} />
                                Home
                              </NavLink>
                              
                              <NavLink to="/catalogue" className={({isActive})=> 
                              isActive ? "mobile-link active-mobile-link" : "mobile-link"
                              }
                              >
                                <FlaskConical size={22} />
                                Catalogue
                              </NavLink>

                              {/* <NavLink 
                              to= "/reviews"
                              className={({isActive}) =>
                              isActive ? "mobile-link active-mobile-link" : "mobile-link"}
                              >
                                <MessageSquare size={22} />
                                Reviews
                              </NavLink> */}

                            <NavLink to="/about"
                            className={({isActive}) => isActive ? "mobile-link active-link" : "mobile-link"}>
                                <Users size={22} />
                                About
                            </NavLink>

                            <NavLink to="/support"
                            className={({isActive}) => isActive ? "mobile-link active-link" : "mobile-link"}>
                                <CircleQuestionMark size={22} />
                                Support
                            </NavLink>

                        </div>

                        {/* CURRENCY */}

                        <div className="currency-outer">

                            <p className="text-white/50 text-sm tracking-[2px] mb-4">
                                CURRENCY
                            </p>

                            <div className="flex flex-wrap gap-3" id="currency-inner">

                                {[
                                    { label: "$ USD", code: "USD" },
                                    { label: "₹ INR", code: "INR" },
                                    { label: "€ EUR", code: "EUR" },
                                    { label: "£ GBP", code: "GBP" },
                                    { label: "A$ AUD", code: "AUD" },
                                    { label: "₩ KRW", code: "KRW" },
                                  ].map((item, index) => (

                                    <button
                                        key={index}
                                        onClick={() =>
                                          setSelectedCurrency(item.code)
                                        }
                                        className={`
                                          h-[44px]
                                          min-w-[64px]
                                          px-4
                                          rounded-xl
                                          border
                                          text-sm
                                          transition-all
                                          duration-300

                                          ${
                                            selectedCurrency === item.code
                                              ? "bg-[#9276C2]  text-white"
                                              : "bg-white/15 text-white/70"
                                          }
                                        `}
                                      >

                                      {item.label}

                                    </button>

                                  ))}

                            </div>

                        </div>

                        <button onClick={()=> navigate("/catalogue")} className="w-[calc(100%-40px)] mx-auto h-[58px] rounded-2xl bg-gradient-to-r from-[#987BC6] to-[#d5c4e6] mt-8 text-white font-semibold text-[18px] flex items-center justify-center gap-3" id="view-cart">

                            <ShoppingCart size={22} />

                            View Cart

                        </button>
                    </motion.div>

                )}


          </AnimatePresence>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white z-[120]"
                >

                {menuOpen ? (
                    <X size={34} strokeWidth={1.5} />
                ) : (
                    <Menu size={30} />
                )}

            </button>

        </div>

                <SearchPanel
          isOpen={isSearchOpen}
          setIsOpen={setIsSearchOpen}
        />

      </nav>
    </>
  )
}

export default Navbar