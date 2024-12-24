import React from "react";
import { BsBell } from "react-icons/bs";

const Products = () => {
  return (
    <section className="bg-[#CBE4DE] py-4">
      <div className="container mx-auto px-4 text-center">
 
        <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-12">Our Products</h2>
        <p className="text-gray-600 text-lg mb-8">
         We’ll Deliver the best stories and ideas on the topics you care about most straight to <br/>your homepage, app, or inbox.
        </p>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
         
          <div className="bg-white p-6  rounded-xl shadow-lg text-center">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-[#EFEFEF] text-white rounded-full">
              <BsBell className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Product One
            </h3>
            <p className="text-gray-600 mb-4 mr-16 ml-16">
            Deliver the best storie and ideas on the topics you care about most straight to you.
            </p>
          </div>

          <div className="bg-white p-6  rounded-xl shadow-lg text-center">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-[#EFEFEF] text-white rounded-full">
              <BsBell className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Product Two
            </h3>
            <p className="text-gray-600 mb-4 mr-16 ml-16">
            Deliver the best stories and ideas on the topics you care about most straight to you.
            </p>
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-[#EFEFEF] text-white rounded-full">
              <BsBell className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Product Three
            </h3>
            <p className="text-gray-600 mb-4 mr-16 ml-16">
            Deliver the best stories and ideas on the topics you care about most straight to you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center lg:mt-10">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-[#EFEFEF] text-white rounded-full">
              <BsBell className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Product Four
            </h3>
            <p className="text-gray-600 mb-4 mr-16 ml-16">
            Deliver the best stories and ideas on the topics you care about most straight to you.
            </p>
          </div>

        
          <div className="bg-white p-6 rounded-xl shadow-lg text-center  lg:mt-10">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-[#EFEFEF] text-white rounded-full">
              <BsBell className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Product Five
            </h3>
            <p className="text-gray-600 mb-4 text-center mr-16 ml-16">
            Deliver the best stories and ideas on the topics you care about most straight to you.
            </p>
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow-lg text-center  lg:mt-10">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-[#EFEFEF] text-white rounded-full">
              <BsBell className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Product Six
            </h3>
            <p className="text-gray-600 mb-4 mr-16 ml-16">
            Deliver the best stories and ideas on the topics you care about most straight to you.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Products;
