<section className="w-full bg-[#020b24] border-y border-white/10 py-3">

  <div className="max-w-[1200px] mx-auto px-4 flex justify-center">

    <div className="flex flex-wrap justify-center gap-4">

      {[
        "COA Verified",
        "GMP Sourced",
        "HPLC Tested"
      ].map((item, index) => (

        <div
          key={index}
          className="min-w-[150px] h-[42px] px-7 rounded-full border border-white/40 flex items-center justify-center text-white text-[16px] md:text-[18px] font-medium hover:bg-white/5 transition-all"
        >

          {item}

        </div>

      ))}

    </div>

  </div>

</section>