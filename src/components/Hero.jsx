import React from "react";

function Hero() {
  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({behavior:"smooth"})
  }

  return (
    <section className="font-poppins h-screen  items-center flex">
      <div className="p-16 bg-hero bg-center bg-cover h-screen w-screen items-center flex flex-col justify-between">
        <div className="text-white flex p-4">
          <h2 className="text-4xl font-bold text-center uppercase ">
            An Experience.
            <br />A Lifestyle.A luxury.
          </h2>
        </div>

        <div className="text-3xl font-bold text-center text-white flex space-x-48 mt-72 ">
          <p
            onClick={scrollToFooter}
            id="contact"
            className="hover:text-pink-100 duration-300 hover:scale-150 uppercase"
          >
            Contact
          </p>

          <p onClick={scrollToAbout}
            id="about"
            className="hover:text-pink-100 duration-300 hover:scale-150 uppercase"
          >
            About us
          </p>
        </div>

        <aside className=" absolute top-60   overflow-hidden shadow-2xl transition-all duration-500 before:absolute before:left-0 break-before-right-0 before-top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:duration-300 before:ease-out hover:shadow-pink-900 hover:before:h-48 hover:before:w-40 hover:before:opacity-80 hover:scale-110">
          <button className="h-auto w-auto border-8 border-pink-500 rounded-lg border-solid  border-b-2 bg-pink-500 ease-out">
            <p className="text-3xl uppercase font-bold duration-300">
              Online store
            </p>
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
