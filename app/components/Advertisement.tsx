import React from "react";
import Image from "next/image";
import AppImg from "../../public/assets/AppImg.png";

type Props = {};

const Advertisement = (props: Props) => {
  return (
    <div className="md:grid md:grid-cols-2 justify-center items-center gap-4 mt-4">
      {/* Ad Caption */}
      <div className="md:px-16 text-left items-center justify-center flex">
        <h2 className="text-7xl text-wrap font-bold">
          So, what are you waiting for? <br /> Get our exclusive deal in one
          hand
        </h2>
      </div>

      {/* Ad App Img */}
      <div className=" p-16 rounded-t-lg justify-center items-center flex">
        <div className=" bg-red-400 h-[450px] rounded-t-full w-[450px] pt-14 ">
          <Image src={AppImg} alt="Luxville Mobile" />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
