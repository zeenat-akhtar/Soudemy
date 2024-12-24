import React, { useState,useEffect } from "react";

const Reviews = () => {
  const cards = [
    {
      img: "customer.png",
      title: "Melissa Venbargh",
      description: "We have very fair pricing policy that would benefit you and us at the same time. Choose what price you're willing to pay. Get the free plan & if you need more - pay.",
    },
    {
      img: "customer.png",
      title: "David",
      description: "We have very fair pricing policy that would benefit you and us at the same time. Choose what price you're willing to pay. Get the free plan & if you need more - pay",
    },
    {
      img: "customer.png",
      title: "Johnson",
      description: "We have very fair pricing policy that would benefit you and us at the same time. Choose what price you're willing to pay. Get the free plan & if you need more - pay",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <>
    <section className="bg-[#0E8388]  min-h-[50vh] py-12">
      <div className="container mx-auto">
       
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Boost Your Revenue & Cut Work Hours</h2>
          <p className="text-white mb-6">
          Organized workflow and predictive patterns to boost your revenue.
          </p>
        </div>

    
        <div className="grid grid-cols-3 md:grid-cols-3 ">
         
          <div className="text-center">
            <h1 className="lg:text-9xl text-5xl font-semibold text-white mb-2">47%</h1>
            <p className="text-white mb-4 text-sm text-md">
            Lessers Backlog
            </p>
          </div>

          <div className="text-center">
            <h1 className="lg:text-9xl text-5xl font-semibold text-white mb-2">33%</h1>
            <p className="text-white mb-4 text-sm text-md">
              Higher Profits
            </p>
          </div>

    
          <div className="text-center">
            <h1 className="lg:text-9xl text-5xl font-semibold text-white mb-2">33%</h1>
            <p className="text-white mb-4 text-sm text-md">
             Higher Profits
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href="#" className="text-white text-sm underline">
           Know more about our company
          </a>
        </div>
      </div>
    </section>
    <section className=" min-h-[50vh] py-12 px-8">
      <div className="container mx-auto space-y-8">
        
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Customers Say Nice Things</h2>
          <p className="text-gray-600">
          We have very fair pricing policy that would benefit you and us at the same time.<br/> Get the free plan & if you need more - pay.
          </p>
        </div>

       
        <div className="relative flex  justify-center">
          
          <div className="bg-[#CBE4DE] rounded-lg p-8 lg:w-1/2 text-center">
            <img
              src={cards[currentIndex].img}
              alt={cards[currentIndex].title}
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {cards[currentIndex].title}
            </h3>
            <p className="text-gray-600">{cards[currentIndex].description}</p>
            <div className="flex justify-center space-x-2 mt-4">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`block w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
          </div>
        </div>

      
       
      </div>
    </section>
    </>
  );
};

export default Reviews;
