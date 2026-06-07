import React from "react"
import { useParams } from "react-router-dom"
import products from "../data/products"
import './ProductDetails.css'
import { Shield, 
    CircleCheckBig , 
    FlaskConical, 
    FileCheck,
    Astroid ,
    TriangleAlert ,
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams()

  const navigate = useNavigate()

  const product = products.find(
    (item) => item.slug === slug
  )

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (

    <>

    <section id="header-section" className="w-full bg-[#071028] pt-[120px] pb-[28px] px-5">

  <div id="header-div-section" className="max-w-[1200px] mx-auto">

    {/* BREADCRUMB */}

    <div id="breadcrumb" className="flex items-center gap-2 text-[15px] text-white/50">

      <span onClick={()=> navigate("/catalogue")} className="cursor-pointer flex items-center justify-start hover:text-white transition">

         Back to Catalogue

      </span>

      <span>/</span>

      <span className="text-white">

        {product.title}

      </span>

    </div>

    {/* TITLE */}

    <h1 id="product-title" className="text-white italic font-bold text-[40px] sm:text-[45px] leading-none mt-5 tracking-[-1px]">

      {product.title}

    </h1>

    {/* TAGS */}

    <div id="div-tags" className="flex flex-wrap items-center gap-3 mt-6">

      {/* STOCK */}

      <div className="h-[35px] px-5 rounded-full bg-[#03291d] border border-[#0d8a5b] flex items-center gap-2">

        <span className="tags text-[#23e18c] text-[18px] flex items-center gap-2 font-medium">

          <CircleCheckBig  size={16}/> In Stock

        </span>

      </div>

      {/* COA */}

      <div className="h-[40px] px-5 rounded-full bg-[#0c1d4d] border border-[#2c63ff] flex items-center gap-2">

        <span className="tags text-[#8eb4ff] flex justify-center items-center gap-2 text-[18px] font-medium">

          <Shield size={16}/> COA Verified

        </span>

      </div>

      {/* HPLC */}

      <div className="h-[40px] px-5 rounded-full bg-[#362000] border border-[#f59e0b] flex items-center gap-2">

        <span className="tags text-[#fbbf24] text-[18px] flex justify-center items-center gap-2 font-medium">

         <FlaskConical size={16}/> HPLC Tested

        </span>

      </div>

      {/* GMP */}

      <div className="h-[40px] px-5 rounded-full bg-[#1d2638] border border-[#64748b] flex items-center gap-2">

        <span className="tags text-[#cbd5e1] text-[18px] flex items-center gap-2 font-medium">

          <FileCheck size={16}/>GMP Source

        </span>

      </div>

      {/* FLAGSHIP */}

      <div className="h-[40px] px-5 rounded-full bg-[#402400] border border-[#f59e0b] flex items-center gap-2">

        <span className="tags text-[#fbbf24] text-[18px] flex items-center gap-2 font-medium">

          <Astroid  size={16}/>Flagship

        </span>

      </div>

    </div>

  </div>

    </section>

    <section id="alert-section" className="w-full bg-[#f5f7fa] px-4 sm:px-6 lg:px-8 py-8">

            <div id="outer-div" className="max-w-[1280px] mx-auto">

                <div className="w-full border border-[#efc75e] bg-[#fbf7e8] rounded-[18px] px-5 sm:px-7 lg:px-8 py-5 sm:py-6 flex items-start gap-4">

                {/* ICON */}

                <div className="shrink-0 mt-[2px]">

                </div>

                {/* TEXT */}

                <p id="para-tag" className="text-[#9a4f06] text-[14px] sm:text-[15px] lg:text-[13px] leading-[1.7] font-[400] flex gap-2">

                    <span className="font-[700] text-[14px] flex justify-center items-center gap-1">

                    <TriangleAlert size={18}/>Product Images:

                    </span>

                    {" "}Images displayed are representative. Actual products are pharmaceutical-grade peptides supplied in sterile lyophilised vials. All orders include Certificates of Analysis.

                </p>

                </div>

            </div>

    </section>

    <section className="w-full bg-[#f5f7fa] py-10 px-4 lg:px-8">

  <div id="details-div" className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-10">

    {/* LEFT SIDE */}

    <div>

      {/* IMAGE CARD */}

      <div className="bg-white border border-[#d8e0ea] rounded-[24px] p-4 relative overflow-hidden">

        {/* FLAGSHIP */}

        <div className="absolute top-4 left-4 bg-[#071028] rounded-[12px] px-5 py-3 flex items-center gap-2 z-20">

          <span className="text-yellow-400 text-[14px]">

            ★

          </span>

          <p className="text-white text-[13px] font-bold uppercase">

            Flagship

          </p>

        </div>

        {/* PRODUCT IMAGE */}

        <div className="bg-[#00153c] rounded-[18px] overflow-hidden flex justify-center items-center py-14">

          <img
            src={product.image}
            alt={product.title}
            className="w-[220px] lg:w-[260px] object-contain"
          />

        </div>

        {/* STOCK */}

        <div className="mt-4 h-[54px] border border-[#dbe2ea] rounded-[16px] flex items-center px-5 gap-3">

          <div className="w-[10px] h-[10px] rounded-full bg-[#16c47f]" />

          <p className="text-[#334155] text-[16px] font-medium">

            In Stock · Ready to Ship

          </p>

        </div>

      </div>

      {/* PURITY CARD */}

      <div id="purity-card" className="mt-5 border border-[#9be7bc] bg-[#e9f9ef] rounded-[22px] p-5">

        <div className="flex justify-between items-start">

          <div>

            <h3  className="text-[#071028] text-[20px] font-bold">

              99.8% Purity Verified

            </h3>

            <p className="text-[#0f766e] text-[14px]">

              HPLC Tested — COA Available

            </p>

          </div>

          <button className="text-[#059669] font-semibold text-[14px]">

            Request COA

          </button>

        </div>

        <div className="flex justify-between mt-6 text-[14px] font-semibold text-[#334155]">

          <span>Purity</span>

          <span>99.8%</span>

        </div>

        <div className="mt-3 h-[18px] rounded-full bg-[#bceecf] overflow-hidden">

          <div className="h-full w-[99%] bg-[#18c37d]" />

        </div>

      </div>

      {/* STATS */}

      <div id="small-cards" className="grid grid-cols-3 gap-3 mt-4">

        {[
          ["48h", "Dispatch"],
          ["3K+", "Orders"],
          ["99.8%", "Purity"],
        ].map((item, i) => (

          <div
            key={i}
            className="h-[90px] bg-white border border-[#d8e0ea] rounded-[14px] flex flex-col items-center justify-center"
          >

            <h4 className="text-[#071028] text-[26px] font-bold">

              {item[0]}

            </h4>

            <p className="text-[#64748b] text-[15px]">

              {item[1]}

            </p>

          </div>

        ))}

      </div>

      {/* WHATSAPP CTA */}

      <button onClick={()=>  window.open(
        "https://wa.me/919289449368?text=Hi%20Protocol,%20I%20would%20like%20to%20know%20more%20about%20your%20research%20products.",
        "_blank"
      )}
      id="whatsapp-btn" className="w-full h-[74px] mt-4 rounded-[18px] bg-[#16c47f] hover:bg-[#12b26f] transition-all flex flex-col justify-center items-center text-white">

        <span className="text-[20px] font-bold">

          Ask on WhatsApp

        </span>

        <span className="text-[12px] opacity-90">

          Get answers before you order

        </span>

      </button>

    </div>

    {/* RIGHT SIDE */}

    <div className="details-section">

      <p id="Research-Peptide" className="uppercase tracking-[2px] text-[#475569] text-[12px] font-medium">

        Research-Peptide

      </p>

      <h2 id="Peptide-desc" className="mt-5 text-[#334155] font-bold text-[22px] lg:text-[22px] leading-[1.45]">

        Triple agonist peptide targeting GLP-1,
        GIP, and glucagon receptors for metabolic
        and obesity research.

      </h2>

      {/* WARNING */}

      <div id="warning-box" className="mt-8 border border-red-200 bg-[#fff4f4] rounded-[18px] p-5">

        <p id="warning-desc" className="text-[#d11a47] text-[14px] leading-[1.8]">

          <strong>RESEARCH USE ONLY</strong> —
          This product is strictly for laboratory
          and analytical purposes. Not for human
          consumption. By ordering, you confirm
          you are a qualified researcher.

        </p>

      </div>

      {/* VARIANT BOX */}

      <div id="price-div" className="mt-7 border border-[#dbe2ea] bg-white rounded-[22px] p-6">

        <h3 id="Choose-Your-Variant" className="text-[#071028] text-[22px] font-bold">

          Choose Your Variant

        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">

          {[
            {
              price: "Starter Research Kit",
              title: "10mg × 1 vial",
              save: "Best for Initial Evaluation",
              // active: true,
            },
            {
              price: "Research Bundle",
              title: "10mg × 2",
              save: "Popular Choice",
            },
            {
              price: "Extended Study Kit",
              title: "10mg × 5 vials",
              save: "For Longer Protocols",
            },
            {
              price: "Laboratory Pack",
              title: "10mg × 10 vials",
              save: "Bulk Research Supply",
            },
          ].map((item, i) => (

            <div
              key={i}
              id="price-sec"
              className={`rounded-[18px] border p-5 min-h-[120px]
              ${
                item.active
                  ? "border-[#071028] border-[2px]"
                  : "border-[#dbe2ea]"
              }`}
            >

              <h4 className="text-[22px] font-bold text-[#334155]">

                {item.price}

              </h4>

              <p className="text-[#64748b] mt-1">

                {item.title}

              </p>

              {item.active ? (
                <p className="mt-4 text-[#071028] font-medium">

                  ✓ Selected

                </p>
              ) : (
                <div className="mt-4 h-[18px] rounded-full bg-[#d5f7e5] px-3 text-[12px] font-semibold text-[#059669] flex items-center w-fit">

                  {item.save}

                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

    </>



  )
}

export default ProductDetails