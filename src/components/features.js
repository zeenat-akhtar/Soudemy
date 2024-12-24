import React from "react";

const Features = () => {
  return (
    <section className="bg-white py-16 lg:px-56">
      <div className="container mx-auto ">
       
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Features</h2>
          <p className="text-gray-600">
            Explore the key features that make our platform unique and effective
            for your needs.
          </p>
        </div>

       <div >
        <div className="flex flex-col md:flex-row items-center bg-white gap-6  p-12">
          <div className=" lg:w-2/3 w-4/5">
            <img
              src="WB1.png"
              alt="Feature 1"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3 text-center md:ml-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 sm:mt-6">Feature One</h3>
            <p className="text-gray-600">
              When you get straight to the point, the presentation looks
              attractive on your web pages. 
            </p>
          </div>
        </div>

      
        <div className="flex flex-col md:flex-row-reverse items-center justify-center  bg-white gap-6  p-12">
          <div className="lg:w-2/3 w-4/5">
            <img
              src="WB2.png"
              alt="Feature 2"
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-2/3 text-center  md:mr-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 sm:mt-6">Feature Two</h3>
            <p className="text-gray-600 ">
              When you get straight to the point, the presentation looks
              attractive on your web pages. 
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
