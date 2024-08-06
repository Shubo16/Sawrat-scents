import React from "react";
import AdCards from "./AdCards";

function Main() {
  return (
    <main className="font-poppins max-h-auto max-w-full bg-cream p-10">
      <section  className="p-20">
        <h2 className="uppercase text-5xl flex justify-center my-10 md:text-4xl sm:text-1l">
          About us
        </h2>
        <div id="about" className="xl:text-6xl text-justify text-justify-center md:text-3xl sm:text-base break-words">
          We are Sawrat, which means exquisite in Arabic. This is what we are,
          what perfume is; a blend of ingredients from around the world. Every
          drop against the skin a seed from which associations, memories,
          thoughts come to life. Luxury, through Sawraht.
        </div>
      </section>

      <AdCards/>
    </main>
  );
}

export default Main;
