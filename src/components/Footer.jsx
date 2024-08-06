import React from "react";

const getCurrentDate = new Date();
let year = getCurrentDate.getFullYear();

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("scroll up");
  }
  

function Footer() {
  return (
    <footer id='footer' className="bg-pink-600  max-w-fit flex flex-col p-10 bottom-0 font-poppins gap-20  ">
       <div className=" tracking-wide p-10 md:p-8 sm:p-6  font-extrabold ">
        <p className=" text-center 2xl:text-6xl md:text-3xl sm:text-lg break-words whitespace-normal ">
          Pouring our heart and soul into every drop and every scent. Feel your best. Be your best.Command any room. Make your mark.Feel exquisite. <br />
          That is the goal of Sawrat.
        </p>
      </div>

      <div className="flex flex-row gap-5 justify-center text-4xl font-light lg:space-x-52 md:text-2xl sm:text-lg">
        <p>CONTACT@S.COM</p>
        <p>@KZY.CODES</p>
      </div>

      <div className="flex flex-row justify-between  my-4">
        <button
          onClick={topFunction}
          className=" bg-blue-400 border-8 rounded-lg  border-solid border-blue-400 border-b-2 overflow-hidden shadow-2xl transition-all duration-500 before:absolute before:left-0 break-before-right-0 before-top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:duration-300 before:ease-out hover:text-white hover:shadow-blue-500 hover:before:h-48 hover:before:w-40 hover:before:opacity-80 "
        >
          BACK TO TOP
        </button>

        <p>STUDIO SAWRAH, LONDON</p>

        <p className=''>&#169; {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
