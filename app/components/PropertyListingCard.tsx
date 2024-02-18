import React from "react";
import Image from "next/image";
import AprtImg from "../../public/assets/aprt8.jpg";
import AprtImg1 from "../../public/assets/aprt5.jpg";
import AprtImg2 from "../../public/assets/aprt2.jpg";

type Props = {};

const PropertyListingCard = (props: Props) => {
  return (
    <div className="md:h-[85%] md:grid md:grid-cols-3 gap-4 py-4">
      <div className="md:h-[450px] md:w-[400px] bg-gray-400 rounded-2xl">
        <Image
          src={AprtImg}
          alt="Apartment Listing"
          width={450}
          height={450}
          className="md:h-full object-cover rounded-2xl cursor-pointer hover:scale-[0.99]"
        />
        <p className="mt-2 text-center text-lg font-regular">
          Futuristic Interior Decor{" "}
        </p>
      </div>
      <div className="md:h-[450px] md:w-[400px] bg-gray-400 rounded-2xl">
        <Image
          src={AprtImg1}
          alt="Apartment Listing"
          width={450}
          height={450}
          className="md:h-full object-cover rounded-2xl cursor-pointer hover:scale-[0.99]"
        />
        <p className="mt-2 text-center text-lg font-regular">
          Economical & Luxurious Apartments{" "}
        </p>
      </div>
      <div className="md:h-[450px] md:w-[400px] bg-gray-400 rounded-2xl">
        <Image
          src={AprtImg2}
          alt="Apartment Listing"
          width={450}
          height={450}
          className="md:h-full object-cover rounded-2xl cursor-pointer hover:scale-[0.99]"
        />
        <p className="mt-2 text-center text-lg font-regular">
          Spacious Parlour{" "}
        </p>
      </div>
    </div>
  );
};

export default PropertyListingCard;
