import React from "react";
import Image from "next/image";
import brokerageImg from '../../public/assets/brokerageImg.jpg'

type Props = {};

const EstateBrokerage = (props: Props) => {
  return (
    <div className="md:flex md:flex-col md:justify-center md:items-center md:mt-8 md:mb-12">
      <h1 className="text-3xl font-medium md:mb-8">
        We are a global, boutique real estate brokerage
      </h1>
      {/* Grid */}
      <div className="md:grid md:grid-cols-2  gap-6">
        {/* Text Section */}
        <div className="flex flex-col gap-4 md:w-[550px] py-8">
          <h2 className="text-5xl">The transfer of real estate</h2>
          <p>
            Choose the starting point for your future, and we'll assist you in
            bringing it to fruition. Select the foundation of your journey, and
            we'll provide the support you need to turn your aspirations into
            reality. Your future begins with a decision; let us help you embark
            on that transformative path.{" "}
          </p>

          {/* Button Section */}
          <div className=" gap-4 md:flex ">
            <button className="md:px-4 md:py-3  rounded-full md:w-[160px] md:h-[60px] bg-black text-white">
              Book Now
            </button>
            <button className="md:px-4 md:py-3  rounded-full md:w-[160px] md:h-[60px] bg-[#fefefe] text-black border border-[#bebebe]">
              Read More
            </button>
          </div>

          {/* Statistics  */}
          <div className="md:grid md:grid-cols-3 mt-10 mb-10">
            <span className="grid grid-rows-2">
              <p className="text-6xl font-bold">12+</p>
              <p>Customers</p>
            </span>
            <span className="grid grid-rows-2">
              <p className="text-6xl font-bold">14+</p>
              <p>Offices</p>
            </span>
            <span className="grid grid-rows-2">
              <p className="text-6xl font-bold">10+</p>
              <p>Students</p>
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <Image src={brokerageImg} alt="Estate Brokerage" width={550} height={350} className="rounded-lg mt-6 h-[410px] object-cover " />
        </div>
      </div>
    </div>
  );
};

export default EstateBrokerage;
