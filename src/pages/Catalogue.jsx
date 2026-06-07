import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, 
  ShieldCheck, 
  Beaker, 
  FileText, 
  FlaskConical,
  Zap, 
  Brain, 
  Activity, 
  ArrowRight,
  Star, 
  ChevronDown, 
  Check } from 'lucide-react';
import './Catalogue.css';
import products from '../data/products.js'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx';
import SearchPanel from '../components/SearchPanel.jsx';

import { useCurrency } from "../context/CurrencyContext"

import { currencyRates } from "../utils/currency"

const Catalogue = () => {
  // Logic States
  const [activeType, setActiveType] = useState('All');
  const [activeFilter, setActiveFilter] = useState('All Areas');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Featured');
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navigate = useNavigate()

  const { selectedCurrency } = useCurrency()


  const formatPrice = (price) => {

  const currency =
    currencyRates[selectedCurrency]

  const converted =
    price * currency.rate

  return `${currency.symbol}${Math.round(
    converted
  ).toLocaleString()}`
}

  // Categories Data

  // const categories = [
  //   { name: 'Metabolic', icon: <Zap size={14} /> },
  //   { name: 'Cognitive', icon: <Brain size={14} /> },
  //   { name: 'Recovery', icon: <Activity size={14} /> },
  //   { name: 'Longevity', icon: <Star size={14} /> },
  // ];

  // Sort Options Data

  // const sortOptions = [
  //   'Featured',
  //   'Price: Low → High',
  //   'Price: High → Low',
  //   'Name: A → Z'
  // ];

  // const handleSortSelect = (option) => {
  //   setSelectedSort(option);
  //   setIsSortOpen(false);
  // };


  return (
    <> 
    <Navbar />

    <div className="catalogue-wrapper">
      {/* DARK HEADER SECTION */}
      <header className="dark-header">
        <div className="container-custom">
          {/* Top Label */}
          <div className="top-label-container text-center">
            <span className="research-label">Research Catalogue</span>
          </div>

          {/* Title & Badges Row */}
          <div className="main-info-row">
            <div id='title_div' className="text-block text-center">
              <h1>Precision Formulations. All Verified.</h1>
              <p>No unverified suppliers. No mystery compounds. Just precision-grade research formulations that pass HPLC every single batch.</p>
            </div>
            <div className="badges-block flex justify-center">
              <div className="badge badge-green"><ShieldCheck size={14}/> COA Included</div>
              <div className="badge badge-blue"><Beaker size={14}/> 99%+ Purity</div>
              <div className="badge badge-orange"><FileText size={14}/> HPLC Verified</div>
            </div>
          </div>

          {/* Search Bar - Full Width Block */}
          <div className="search-container">
            <Search className="search-icon text-center" size={18} />
            <input onClick={()=> setIsSearchOpen(true)}
              type="text" readOnly
              className='text-center'
              placeholder="Search peptides — try 'BPC', 'cognitive', 'metabolic'..." 
            />
            {/* <div className="search-shortcut">/</div> */}
          </div>

          {/* Filters Row */}
          <div className="filters-row">
            <div className="left-filters">
              {/* Type Toggle Logic */}
              {/* <div className="type-toggle">
                <button 
                  className={activeType === 'All' ? 'active' : ''} 
                  onClick={() => setActiveType('All')}
                >
                  All <span>9</span>
                </button>
                <button 
                  className={activeType === 'Peptides' ? 'active' : ''} 
                  onClick={() => setActiveType('Peptides')}
                >
                  Peptides <span>9</span>
                </button>
              </div> */}

              {/* <div className="v-divider"></div> */}

              {/* Area Category Pills Logic */}
              {/* <div className="category-pills">
                <button 
                  className={activeFilter === 'All Areas' ? 'active' : ''} 
                  onClick={() => setActiveFilter('All Areas')}
                >
                  <div className="grid-icon"><span></span><span></span><span></span><span></span></div> 
                  All Areas
                </button>
                
                {categories.map((cat) => (
                  <button 
                    key={cat.name}
                    className={activeFilter === cat.name ? 'active' : ''} 
                    onClick={() => setActiveFilter(cat.name)}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div> */}
            </div>

            {/* FEATURED DROPDOWN SECTION */}
            {/* <div className="right-filters">
              <div className="sort-container">
                <button className="sort-btn" onClick={() => setIsSortOpen(!isSortOpen)}>
                  {selectedSort} <ChevronDown size={14} className={isSortOpen ? 'rotate-180' : ''} />
                </button>

                {isSortOpen && (
                  <div className="sort-dropdown-menu">
                    {sortOptions.map((option) => (
                      <button 
                        key={option}
                        className={`sort-option ${selectedSort === option ? 'selected' : ''}`}
                        onClick={() => handleSortSelect(option)}
                      >
                        {option}
                        {selectedSort === option && <Check size={14} className="check-icon" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div> */}
          </div>
        </div>
      </header>

      {/* WHITE RESULTS BAR AND PRODUCTS CARDS */}

    <section className="catalogue-section">
      <div className="catalogue-container">

        {/* <p className="product-count">
          Showing <strong>9</strong> of 9 products
        </p> */}

        <div className="catalogue-grid ">

          {products.map((item, index) => (

            <div className="catalogue-card" key={index}>

              {/* IMAGE CARD */}

              <div className="catalogue-image-box">

                <span className="purity-pill  text-black ">

                  <ShieldCheck size={14} />
                  {item.purity}

                </span>

                {/* <span className="category-pill">

                  {item.category}

                </span> */}

                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image "
                />

              </div>

              {/* CONTENT */}

              <div className="catalogue-content ">

                <h3 className="product-title">{item.title}</h3>

                <p className="product-desc">

                  {item.desc}

                </p>

                {/* FEATURES */}

                <div className="verify-list">

                  <span id='Lab-verified' className='flex gap-1 justify-center items-center'>
                    <ShieldCheck size={14} className='text-green-500'/>
                    Lab verified
                  </span>

                  <span id='HPLC-tested' className='flex gap-1 justify-center items-center'>
                    <FlaskConical size={14} className='text-blue-500'/>
                    HPLC tested
                  </span>

                  <span id='COA-included' className='flex gap-1 justify-center items-center'>
                    <FileText size={14} className='text-blue-400'/>
                    COA included
                  </span>

                </div>

                {/* PRICE */}

                <div className="price-row">

                    <span id='' className="from-text flex justify-between items-center gap-10">

                      {/* price-section */}
                      {/* <h4 className="price-section text-black text-2xl">{formatPrice(item.price)}</h4>              */}

                      <button onClick={()=> window.open(
                        `https://wa.me/919289449368?text=Hi%20Protocol,%20I%20would%20like%20to%20know%20more%20about%20${item.title}.`,"_blank"
                      )}
                       className="order-btn">

                        Enquire Now
                        {/* <ArrowRight size={18} /> */}

                      </button>
                    </span>


                    {/* <span className="save-pill">

                      {item.save}

                    </span> */}

                    {/* <p className="student-text">

                      🎓 Student discount available

                    </p> */}




                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
      
    </div>
    <SearchPanel isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    <Footer/>
    </>
  );
};

export default Catalogue;