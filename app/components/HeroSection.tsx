import { useEffect, useState } from "react";
import Image from "next/image";
import HomeImg from "../../public/assets/Img-1.png";

type Props = {};

const HeroSection = (props: Props) => {
  const [email, setEmail] = useState<string>("");

  const handleGetQuote = () => {
    // Your logic for handling the quote goes here
  };

  return (
    <div
      className="md:w-full rounded-2xl md:justify-center md:items-center md:flex md:h-[617px] md:mt-3 md:mb-8"
      style={{
        background: "linear-gradient(to right, rgb(193, 222, 232), rgb(251, 217, 185))",
      }}
    >
      {/*Caption & Button Section  */}
      <div className="md:justify-center md:px-10 md:items-left md:flex md:flex-col w-[40%] md:left-16 md:h-[617px]  md:absolute">
        <p className="font-CabinetGrotesk mb-2">Welcome to Luxury</p>
        <h2 className="text-7xl text-wrap font-CabinetGrotesk">
          Manage Your Property
        </h2>
        <p className="text-sm text-gray-500">
          You will have everything nearby; supermarket, buses, <br></br>station,
          the carmen neighborhood and more.
        </p>

        {/* Email Subscription Button */}
        <div className="md:my-2 w-[380px] bg-white rounded-3xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 rounded-3xl text-medium w-[70%] font-CabinetGrotesk outline-none"
          />
          <button className="text-medium font-CabinetGrotesk justify-center align-center bg-black h-full text-white w-[30%] rounded-3xl">
            Get a Quote
          </button>
        </div>
      </div>

      {/* Image Section */}
      <Image
        alt="Sample Housing"
        src={HomeImg}
        width={840}
        height={650}
        className="md:-mr-[34.5rem]"
      />
    </div>
  );
};

export default HeroSection;
