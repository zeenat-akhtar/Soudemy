import React from "react";


const Footer = () => {
  return (
    <footer className="bg-[#CBE4DE] text-white py-12 px-8">
      <div className="container mx-auto space-y-8">
   
        <div className="text-center">
          <h4 className="text-sm  mb-4 text-gray-600">GRAB ARRAY FOR BEST PRICE TODAY
          </h4>
          <h2 className="mb-6  lg:text-3xl text-xl text-gray-600">
          Start now and turn your online business into a profitable route.
          </h2>
          
          <div className="flex flex-col justify-center items-center gap-4 mb-16">
      
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-3 rounded-md w-96 text-gray-600"
            />
           
            <button className="bg-[#0E8388]   p-3 rounded-md w-96">
              Sign Up Now
            </button>
            <p className="text-sm text-gray-600">14 days free trial. No credit card required.</p>
          </div>
        </div>

        <div className="flex lg:justify-between  items-center">
        
        <a href="#" className="text-gray-600 lg:text-xl text-sm font-semibold">Soudemy</a>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 sm:text-sm hover:text-white"
              aria-label="Facebook"
            >
            Facebook
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-white"
              aria-label="Twitter"
            >
             Twitter 
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-white"
              aria-label="Instagram"
            >
              LinkeIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
