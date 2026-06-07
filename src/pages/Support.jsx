import React from "react";
import "./Support.css";

import {
  CircleHelp,
  MessageCircle,
  Mail,
  Package,
  TestTube2,
  TriangleAlert,
  MessageSquare,
  AlertTriangle,
  Clock3,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer"

const Support = () => {

  return (
    <>
    <Navbar/>

      <section className="support-page ">

        {/* TOP SECTION */}

        <div className="support-hero flex justify-center items-center">

          <div className="support-hero-inner text-center">

            <div className="support-badge">
              <span className="text-black font-bold">Support Centre</span>

            </div>

            <h1 className="support-heading">

              We're Here. Precisely.

            </h1>

            <p className="support-subtext">

              Real people. Fast responses. No automated replies pretending to care. Browse the FAQs below — or reach out directly. We respond, always.
            </p>

          </div>

        </div>

        {/* SUPPORT CARDS */}

        <div className="support-card-section">

          <div className="support-grid">

            {/* CARD 1 */}

            <div className="support-card">

              <div className="support-icon green-bg">
                <MessageCircle size={22} className="text-white" />
              </div>

              <h3>WhatsApp Support</h3>

              <p>
                Real-time assistance for urgent queries and order updates.
              </p>

              <button className="support-btn green-btn">
                Chat on WhatsApp
              </button>

            </div>

            {/* CARD 2 */}

            <div className="support-card">

              <div className="support-icon blue-bg">
                <Mail size={22} className="text-white" />
              </div>

              <h3>Email Support</h3>

              <p>
                For detailed documentation requests, COA queries, or sourcing questions.
              </p>

              <a href="mailto:support@protocollabs.uk">
              <button className="support-btn blue-btn">
                Send Email
              </button>
              </a>

            </div>

            {/* CARD 4 */}

            <div className="support-card">

              <div className="support-icon purple-bg">
                <TestTube2 size={22} className="text-white" />
              </div>

              <h3>Technical Support</h3>

              <p>
                Questions about formulation storage, handling, or research protocols.
              </p>

              <button className="support-btn text-white">
                Ask Our Team
              </button>

            </div>

          </div>


        </div>
          {/* accordian */}
            <Accordion/>

          {/* ---------alert-box--------  */}

          <section id='research-box-sec' className="bg-[#ECE2F6] px-5 pb-[120px]">

          <div id='research-box-div' className="max-w-[1280px] mx-auto flex justify-center">

            <div id="research-box-inner" className="w-full bg-[#FFFFFF] max-w-[1000px] sm:px-7 sm:max-w-[600px] md:max-w-[750px] lg:max-w-[1000px] rounded-[10px] px-[42px] py-[38px]">

              {/* TITLE */}

              <h3 id='title-heading-tag' className="text-[#DF1417] text-[22px] text-center font-[700] tracking-[-1px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-[1.2] flex flex-col items-center gap-2">

                <span className='alert-icon flex justify-center'><TriangleAlert/></span> Heads Up — Research Use Only.

              </h3>

              {/* DESCRIPTION */}

              <p id='red-box-desc' className="mt-7 text-black text-[15px] text-center leading-[2] max-w-[920px]">

                All Protocol formulations are intended solely for in vitro research and analytical applications. Not approved for human or veterinary use. By placing an order, you confirm you are a qualified researcher operating in compliance with applicable regulations. 
                  <br /><br />
                  Not for Human Use
              </p>

            </div>

          </div>

          </section>

          {/* ----social-media section-----  */}

          <section id="socialQA-section" className="w-full flex justify-center bg-[#f7f8fc] py-[100px] px-5">

            <div className="max-w-[760px] mx-auto text-center">

              {/* HEADING */}

              <h2 id="question-heading" className="text-[#071028] font-bold text-[32px] sm:text-[40px] tracking-[-1px]">

                Still have questions?

              </h2>

              {/* SUBTEXT */}

              <p id="our-team-section" className="mt-4 text-[#667085] text-[18px] leading-[1.8]">

                Our team is happy to help —
                reach out via WhatsApp for a quick response.

              </p>

              {/* BOX */}

              <div id="find-us" className="mt-10 bg-white border border-[#dbe1ea] rounded-[22px] p-7 text-left">

                <h3 id="how-did-h3" className="text-[#071028] text-[24px] font-semibold">

                  How did you find us?
                  <span className="text-[#ef4444]">*</span>

                </h3>

                <p id="required-before-para" className="text-[#98a2b3] text-[15px] mt-1">

                  Required before contacting us

                </p>

              </div>

              {/* WHATSAPP BUTTON */}

              <div className="whatsapp-div flex justify-center ">

              <button onClick={()=>
                window.open("https://wa.me/919289449368?text=Hi%20Protocol,%20I%20would%20like%20to%20know%20more%20about%20this%20product.", "_blank")
              }
              id="whatsapp-btn" 
              className="w-[250px] h-[75px] mt-7 rounded-[22px] bg-[#987BC6] hover:bg-[#b389f6] transition-all duration-300 shadow-[0_15px_35px_rgba(34,197,94,0.25)] text-white text-[20px] font-semibold flex items-center justify-center gap-4">

                <MessageSquare size={26} className="text-green-600"/>

                Chat on WhatsApp

              </button>
              </div>

            </div>

          </section>

      </section>

    <Footer/>
    </>
  );
};

export default Support;






{/* <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
      </div>
</div> */}