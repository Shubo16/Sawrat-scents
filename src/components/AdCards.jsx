import React from "react";

function AdCards() {
  return (
    <section id="gallery" className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-center gap-8 lg:gap-16 xl:gap-32">
        <div className="w-full md:w-[48%] xl:w-[35rem] h-[65svh] bg-replica bg-cover bg-center flex justify-start rounded-lg p-4">
          <p className="text-xl md:text-2xl xl:text-3xl text-white font-bold mix-blend-plus-lighter">
            Maison Margiela Replica
          </p>
        </div>
        <div className="w-full md:w-[48%] xl:w-[35rem] h-[65svh] bg-wang bg-cover bg-center flex justify-start rounded-lg p-4">
          <p className="text-xl md:text-2xl xl:text-3xl text-black font-bold mix-blend-plus-darken">
            Shop our latest selection
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full h-[80svh] bg-gigi bg-contain bg-center bg-no-repeat rounded-lg flex justify-center p-4">
          <p className="text-xl md:text-2xl xl:text-3xl text-pink-500 font-bold mix-blend-plus-darken mt-36">
            Exclusive Gigi Hadid Tommy Hilfiger collection
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 lg:gap-16 xl:gap-32 mt-8">
        <div className="w-full md:w-[48%] xl:w-[35rem] h-[65svh] bg-acne bg-cover bg-center flex justify-start rounded-lg p-4">
          <p className="text-xl md:text-2xl xl:text-3xl text-slate-600 font-bold mix-blend-darken">
            Acne studios par Frederic Malle
          </p>
        </div>
        <div className="w-full md:w-[48%] xl:w-[35rem] h-[65svh] bg-bella bg-cover bg-left flex justify-start rounded-lg p-4">
          <p className="text-xl md:text-2xl xl:text-3xl text-pink-500 font-bold mix-blend-exclusion">
            Feel sexy. Be seductive.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdCards;
