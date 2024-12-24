import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-4">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
      
        <img
          src="hero.png"
          alt="Hero"
          className="h-11/12 w-8/12 object-cover "
        />

   
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Everything You Need All In One Place
          </h1>
          <p className="text-gray-600 text-lg mb-8">
          Software and analytics services will render your chunks into meaningful data.
          </p>
          <button className="bg-[#0E8388] text-white px-6 py-2 mb-4 rounded-xl">
            Register Now
          </button>
        </div>

       
        <div className="flex justify-center flex-wrap mb-8 gap-12">
          <img
            src="brand4.png "
            alt="Brand 1"
            className="h-16 opacity-30 object-contain"
          />
          <img
            src="brand3.png"
            alt="Brand 2"
            className="h-16 opacity-30 object-contain"
          />
          <img
            src="brand2.png"
            alt="Brand 3"
            className="h-16 opacity-30 object-contain"
          />
          <img
            src="brand4.png"
            alt="Brand 4"
            className="h-16 opacity-30 object-contain"
          />
          <img
            src="brand2.png"
            alt="Brand 5"
            className="h-16 opacity-30 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
