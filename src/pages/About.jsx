import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight,
    Truck,
    Beaker,
    ArrowDown,
    X,
    Users,
    Lightbulb,
    Goal,
    Heart,
    CircleCheckBig ,
    Check,
    Trophy ,
    TriangleAlert ,
    ShieldCheck, } from 'lucide-react';
import './About.css';
import BannerImg from '../assets/About-Page-Banner-1.png'

const About = () => {
  return (
    <>
    <Navbar />

    <div className="about-page-wrapper">
        {/* 1. OUR STORY SECTION */}
        <div className="about-container flex justify-center" style={{backgroundImage: `url(${BannerImg})`}}>
          <section className="story-section px-6 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Top Pill Badge */}

              {/* Main Heading with Glow Effect */}
              <h2 className="story-title mb-6">
                We Built Protocol Because the<br /> Standard Was Too Low.
              </h2>

              {/* Descriptive Text */}
              <div className="story-description-container">
                <p className="story-text">
                  The UK's research peptide market was flooded with unverified suppliers, no COAs, and zero accountability. We didn't get angry — we got precise. Built from the ground up with GMP sourcing, independent HPLC testing, and one rule: if we can't verify it, we don't sell it.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* 2. METRIC CARDS SECTION */}
        <section className="metrics-section flex justify-center py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="metric-card rounded-20px">

              <h3 className="metric-value">2,500+</h3>
              <p className="metric-label">Orders Shipped</p>
            </div>

            <div className="metric-card">
  
              <h3 className="metric-value">98.8%+</h3>
              <p className="metric-label">Avg Purity Verified</p>
            </div>

            <div className="metric-card">
              
              <h3 className="metric-value">8</h3>
              <p className="metric-label">Premium Compounds</p>
            </div>
          </div>
        </section>

        {/* 3. THE ORIGIN SECTION */}

        <section className="origin-section flex justify-center py-24 bg-white">

          <div className="origin-container text-center">

            {/* LEFT CONTENT */}

            <div>

              <h2 className="origin-heading">

                The Gap That Started It All.

              </h2>

              <div className="origin-paragraphs">

                <p>

                  In 2024, our founding team — researchers sourcing compounds for advanced studies — spent months navigating a completely broken market. Every supplier claimed GMP. None could produce a COA. Pricing was arbitrary, quality was unverifiable, and there was no single trustworthy source in the UK for precision-grade research peptides.
                </p>

                <p>

                  The question was simple: why does a market this important have zero quality standards?
                  So we built the answer. Direct relationships with GMP-certified manufacturers. Independent HPLC testing on every batch. COA included with every single order — not as an option, as a baseline. We started with a small researcher community, grew through honest word of mouth, and let the product speak for itself.

                </p>

                <p>

                  That's Protocol. Precision in every formulation.

                </p>

              </div>

            </div>
              <div className="smallteam text-center">

                    <h2 className="team-heading text-black mb-6">
                          Small Team. <br /> Uncompromising Standards.
                    </h2>
                    <p className="team-description max-w-2xl mx-auto mb-12">
                          We operate lean by design. Every person at Protocol is directly accountable to the researcher.            
                    </p>
            </div>

          </div>

        </section>

        {/* 4. OUR TEAM SECTION */}
        <section className="team-section flex justify-center py-24 ">
          <div className="max-w-6xl mx-auto px-6 text-center">

            {/* Heading */}
            

            {/* Team Cards */}
            <div className="outer-container">
            <div id='team-card-div' className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Founder & Operations Lead */}
              <div className="team-card">
                <div className="team-icon text-black">F</div>
                <h3 className="team-title text-black">Founder & Operations Lead</h3>
                <p className="team-text">
                  Background in biochemistry and supply chain management. Identified the quality gap in the UK research peptide market and built Protocol around one principle: never ship what you can't verify.                </p>
              </div>

              {/* Quality & Sourcing Head */}
              <div className="team-card ">
                <div className="team-icon  bg-green-100 text-black">Q</div>
                <h3 className="team-title text-black">Quality & Sourcing Head</h3>
                <p className="team-text">
                  Works directly with GMP-certified manufacturing partners to validate every batch. Oversees HPLC testing protocols and COA documentation for every formulation in the catalogue.                </p>
              </div>

              {/* Customer Relations */}
              <div className="team-card">
                <div className="team-icon bg-orange-100 text-black">C</div>
                <h3 className="team-title text-black">Customer Relations</h3>
                <p className="team-text">
                  First point of contact for orders, sourcing queries, and technical support. Committed to fast, no-jargon communication — because researchers deserve real answers, not automated replies.                </p>
              </div>
            </div>
            </div>

            {/* Footer Note */}
            <p className="team-footer mt-12 italic text-gray-500 text-sm">
              <span className='flex justify-center gap-5'>We operate under pseudonymous identities for researcher privacy — a standard practice in this space.</span>
            </p>
          </div>
        </section>

        <section id='landscape-section' className="bg-white py-[110px] px-5 overflow-hidden">

      <div id='inner-container' className="max-w-[1250px] mx-auto">

        {/* TOP */}

        <div className="text-center">

          {/* PILL */}

          <span id='our-values' className="inline-flex items-center  justify-center h-[46px] px-7 text-black  text-[13px] font-[700] tracking-[1px] uppercase">

            OUR VALUES

          </span>

          {/* HEADING */}

          <h2 id='stand-for-heading' className="mt-7 text-[#071028] text-[34px] sm:text-[48px] lg:text-[58px] font-bold tracking-[-2px] leading-[1.1]">

            What We Actually Stand For.

          </h2>

        </div>

        {/* GRID */}

        <div id='grid-rectangle-cards' className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[70px]">

          {/* CARD 1 */}

          <div  className="landscape-cards bg-white border border-[#dfe5ec] px-[30px] py-[32px] flex gap-5 min-h-[150px] hover:shadow-[0_12px_35px_rgba(0,0,0,0.04)] transition-all duration-300">

            <div>

              <h3 className="text-[#071028] text-[18px] font-[700]">

                Radical Transparency

              </h3>

              <p className="mt-3 text-[#5f6f86] text-[16px] leading-[1.8]">

                We publish purity data, sourcing details, and batch documentation openly. No hidden costs, no vague claims, no mystery compounds.

              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="landscape-cards bg-white border border-[#dfe5ec] px-[30px] py-[32px] flex gap-5 min-h-[150px] hover:shadow-[0_12px_35px_rgba(0,0,0,0.04)] transition-all duration-300">

            <div>

              <h3 className="text-[#071028] text-[18px] font-[700]">

                Science First

              </h3>

              <p className="mt-3 text-[#5f6f86] text-[16px] leading-[1.8]">

                Every product decision is driven by scientific merit and researcher need. We don't list anything we cannot independently verify and vouch for.

              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="landscape-cards bg-white border border-[#dfe5ec] px-[30px] py-[32px] flex gap-5 min-h-[150px] hover:shadow-[0_12px_35px_rgba(0,0,0,0.04)] transition-all duration-300">

            <div>

              <h3 className="text-[#071028] text-[18px] font-[700]">

                Researcher-Led

              </h3>

              <p className="mt-3 text-[#5f6f86] text-[16px] leading-[1.8]">

                The Protocol community shaped what we stock. We listen to real researcher feedback and iterate on sourcing, formulation presentation, and service continuously.
              </p>

            </div>

          </div>

          {/* CARD 4 */}

          <div className="landscape-cards bg-white border border-[#dfe5ec] px-[30px] py-[32px] flex gap-5 min-h-[150px] hover:shadow-[0_12px_35px_rgba(0,0,0,0.04)] transition-all duration-300">

            <div>

              <h3 className="text-[#071028] text-[18px] font-[700]">

                Honest Pricing

              </h3>

              <p className="mt-3 text-[#5f6f86] text-[16px] leading-[1.8]">

                Margins that are fair and sustainable — not extractive. Our goal is to make genuinely precision-grade research compounds accessible in the UK without unnecessary markup.

              </p>

            </div>

          </div>

        </div>

      </div>

        </section>

        <section className="bg-white py-[110px] flex justify-center px-5 overflow-hidden">

          <div className="max-w-[1280px] mx-auto">

            {/* TOP */}

            <div id='top-tag' className=" text-center max-w-[900px] mx-auto">

              {/* PILL */}

              <span className="inline-flex items-center justify-center h-[46px] px-7 text-black text-[13px] font-[700] tracking-[1px] uppercase">

                QUALITY ASSURANCE

              </span>

              {/* HEADING */}

              <h2 id='heading2-tag' className="mt-7 text-[#071028] text-[34px] sm:text-[48px] lg:text-[56px] font-bold tracking-[-2px] leading-[1.08]">

                How We Make Sure You Get the Real Thing.

              </h2>

              {/* SUBTEXT */}

              <p className="mt-5 text-[#667085] text-[15px] sm:text-[17px] leading-[1.8]  max-w-[760px] mx-auto">

                Every single order goes through this process.
                No shortcuts. No skipping steps.
                No "it's probably fine."

              </p>

            </div>

            {/* PROCESS CARDS */}

                    <div id='process-cards' className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-5

                    max-w-[1280px]
                    mx-auto

                    justify-center
                    place-items-center

                    mt-[40px]
                    md:mt-[55px]
                    ">            

              {/* CARD 1 */}

                <div className="quality-cards bg-[#ECE2F6] min-h-[290px] p-[28px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]">

                <div className="w-[54px] h-[54px] rounded-[18px] bg-white text-black flex items-center justify-center text-[24px] font-bold shadow-[0_10px_25px_rgba(7,16,40,0.18)]">

                  01

                </div>

              <h3 className="
              card-heading
              mt-5 sm:mt-6 lg:mt-8

              text-[#071028]

              text-[20px]
              sm:text-[22px]
              lg:text-[18px]

              font-[700]

              leading-[1.2]
              ">
                  Source Verification

                </h3>

                  <p className="
                  mt-3 sm:mt-4

                  text-[#667085]

                  text-[14px]
                  sm:text-[15px]
                  lg:text-[16px]

                  leading-[1.7]
                  ">
                  Manufacturer credentials, GMP certification, and prior batch records reviewed before any new supplier relationship is established.

                </p>

              </div>

              {/* CARD 2 */}

              <div className="quality-cards bg-[#ECE2F6] min-h-[290px] p-[28px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]">

                <div className="w-[54px] h-[54px] rounded-[18px] bg-white text-black flex items-center justify-center text-[24px] font-bold shadow-[0_10px_25px_rgba(7,16,40,0.18)]">

                  02

                </div>

                <h3 className="card-heading mt-8 text-[#071028] text-[18px] font-[700]">

                  Batch Testing

                </h3>

                <p className="mt-5 text-[#667085] text-[16px] leading-[1.9]">

                  Every incoming batch is independently HPLC-tested. Batches that fall below the 99% purity threshold are rejected outright — no exceptions.

                </p>

              </div>

              {/* CARD 3 */}

              <div className="quality-cards bg-[#ECE2F6] min-h-[290px] p-[28px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]">

                <div className="w-[54px] h-[54px] rounded-[18px] bg-white text-black flex items-center justify-center text-[24px] font-bold shadow-[0_10px_25px_rgba(7,16,40,0.18)]">

                  03

                </div>

                <h3 className="card-heading mt-8 text-[#071028] text-[18px] font-[700]">

                  COA Issuance

                </h3>

                <p className="mt-5 text-[#667085] text-[16px] leading-[1.9]">

                  Certificate of Analysis documenting purity, molecular weight, and testing methodology issued with every single order, automatically

                </p>

              </div>

              {/* CARD 4 */}

              <div className="quality-cards bg-[#ECE2F6] min-h-[290px] p-[28px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.05)]">

                <div className="w-[54px] h-[54px] rounded-[18px] bg-white text-black flex items-center justify-center text-[24px] font-bold shadow-[0_10px_25px_rgba(7,16,40,0.18)]">

                  04

                </div>

                <h3 className="card-heading mt-8 text-[#071028] text-[18px] font-[700]">

                  Sterile Packaging

                </h3>

                <p className="mt-5 text-[#667085] text-[16px] leading-[1.9]">

                  Lyophilised peptides sealed in pharmaceutical-grade sterile vials. Controlled packaging for transit integrity and shelf stability.

                </p>

              </div>

            </div>

            {/* GREEN INFO BOX */}

            <div id='green-box' className="flex justify-center mt-[60px]">

              <div id='green-box-inner' className="w-full max-w-[720px] bg-[#ECFDF5] px-[50px] py-[45px] text-center">

                {/* TITLE */}

                <h3 id='greenbox-h3' className="mt-5 text-black text-[22px] font-bold">

                  Request a COA Anytime

                </h3>

                {/* TEXT */}

                <p id='greenbox-para' className="mt-4 text-[#4b5563]  leading-[1.9] max-w-[620px] mx-auto">

                  Every order includes a Certificate of Analysis. If you'd like to verify a specific batch or request documentation before purchasing, contact our support team — we'll send it over within 24 hours.

                </p>

              </div>

            </div>

          </div>

        </section>

        
        {/* -------research use only alert(section)--------- */}

        <section id='research-box-sec' className="bg-[#ECE2F6] px-5 pb-[120px]">

          <div id='research-box-div' className="max-w-[1280px] mx-auto flex justify-center">

            <div id='research-box-innerdiv' className="w-full max-w-[1100px] bg-white px-[42px] py-[38px]">

              {/* TITLE */}

              <h3 id='title-heading-tag' className="text-[#DF1417] text-[22px] text-center font-[700] tracking-[-1px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[1.2] flex flex-col items-center gap-2">

                <span className='alert-icon flex justify-center'><TriangleAlert/></span>Research Use Only

              </h3>

              {/* DESCRIPTION */}

              <p id='red-box-desc' className="mt-7 text-center text-black text-[15px] leading-[2] max-w-[920px]">

                All Protocol formulations are intended solely for in vitro research and analytical applications. Not approved for human or veterinary use. By placing an order, you confirm you are a qualified researcher operating in compliance with applicable regulations. 

                <br /><br />

                Not for Human Use
                
              </p>

            </div>

          </div>

        </section>

    </div>

    <Footer/>
    </>
  );
};

export default About;