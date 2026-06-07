import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, FlaskConical, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import products from "../data/products"
import './SearchPanel.css'



const SearchPanel = ({ isOpen, setIsOpen }) => {

    const [query, setQuery] = useState("")

    const navigate = useNavigate()

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )

  // ESC CLOSE
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKey)

    return () => {
      window.removeEventListener("keydown", handleKey)
    }
  }, [])

  // CTRL + K
  useEffect(() => {
    const shortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    window.addEventListener("keydown", shortcut)

    return () => {
      window.removeEventListener("keydown", shortcut)
    }
  }, [])

  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-start justify-center pt-14 sm:pt-24 px-3 sm:px-5"
          onClick={() => setIsOpen(false)}
        >

          {/* PANEL */}

          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            id="search-bar-div"
            className="
              w-full
              max-w-[900px]
              h-[85vh]
              sm:h-auto
              rounded-[22px]
              sm:rounded-[26px]
              bg-[#071028]
              border
              border-white/10
              overflow-hidden
              shadow-[0_40px_80px_rgba(0,0,0,0.45)]
              "
            >

            {/* SEARCH BAR */}

              <div className="h-[72px] sm:h-[78px] border-b border-white/10 flex items-center px-4 sm:px-7">
              <Search
                size={24}
                className="text-white/40"
              />

              <input
                type="text"
                placeholder="Search products..."
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="
                    w-full
                    h-full
                    bg-transparent
                    px-5
                    outline-none
                    border-none

                    text-white
                    caret-cyan-400
                    selection:bg-cyan-400
                    selection:text-black

                    text-[15px]
                    sm:text-[18px]
                    font-medium

                    placeholder:text-white/30
                "
                />

              <div id="ctrlk" className="hidden sm:flex bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/50 text-[13px]">

                ctrl+k

              </div>

              <div id="esc-btn" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/50 text-[13px]">

                esc

              </div>

            </div>

            {/* PRODUCTS */}

              <div className="h-[calc(85vh-72px)] sm:max-h-[540px] overflow-y-auto px-3 sm:px-5 py-4 sm:py-5">
              <p id="all-products" className="text-white/30 text-[13px] font-semibold tracking-[1px] mb-4">

                ALL PRODUCTS

              </p>

              <div className="space-y-2">

                {filteredProducts.length > 0 ? (

                  filteredProducts.map((item, index) => (

                    <div key={index} onClick={() => {
                        navigate(`/catalogue?search=${item.title}`)
                        setIsOpen(false) }} className="group h-[84px] rounded-2xl px-4 flex items-center justify-between hover:bg-white/5 transition-all duration-300 cursor-pointer"
>

                      <div className="flex items-center gap-4">

                        {/* IMAGE */}

                        <div className="w-[52px] h-[52px] rounded-xl bg-[#02112d] flex items-center justify-center overflow-hidden">

                          <img
                            src={item.image}
                            alt=""
                            className="w-[34px] object-contain"
                          />

                        </div>

                        {/* TEXT */}

                        <div>

                          <h3 className="text-white text-[17px] sm:text-[22px] font-semibold">

                            {item.title}

                          </h3>

                          <p className="text-white/40 text-[14px] line-clamp-1 max-w-[400px]">

                            {item.desc}

                          </p>

                        </div>

                      </div>

                      {/* RIGHT */}

                      <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-5">

                        <div className="border border-[#31d4a4] rounded-xl px-4 py-2 flex items-center">

                          <FlaskConical
                            size={14}
                            className="text-[#31d4a4]"
                          />

                          <span id="peptides-icon" className="text-[#31d4a4] text-[12px]">

                            Peptide

                          </span>

                        </div>

                        {/* <h3 className="text-white font-bold text-[16px] sm:text-[20px]">

                          {item.price}

                        </h3> */}

                        <ArrowRight
                          size={18}
                          className="hidden sm:block text-cyan-400"
                        />

                      </div>

                    </div>

                  ))

                ) : (

                  <div className="text-center py-16 text-white/40">

                    Not found !

                  </div>

                )}

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}

export default SearchPanel