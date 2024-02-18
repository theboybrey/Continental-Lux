import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className="md:w-full rounded-2xl md:py-24 md:flex md:h-[420px] md:mt-3 md:mb-8"
      style={{
        background:
          "linear-gradient(to right, rgb(193, 222, 232), rgb(251, 217, 185))",
      }}
    >
        <div className="grid grid-cols-5 gap-20 px-24">
            {/* Logo */}
            <span>
                <p className="text-2xl font-medium text-nowrap">Luxville Apartments</p>
            </span>

            {/* Menu Components */}
            <span className="ml-32 text-nowrap">
                <p className="text-md font-medium mb-6">About</p>
                <ul className="flex flex-col gap-3 cursor-pointer">
                    <li>Company</li>
                    <li>Contact Us</li>
                    <li>Terms & Services</li>
                    <li>Privacy Policy</li>
                </ul>
            </span>


            {/* Product */}
            <span className="ml-16 text-nowrap">
                <p className="text-md font-medium mb-6">Product</p>
                <ul className="flex flex-col gap-3 cursor-pointer">
                    <li>Categories</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                </ul>
            </span>

            {/* Discover */}
            <span className=" text-nowrap">
                <p className="text-md font-medium mb-6">Discover</p>
                <ul className="flex flex-col gap-3 cursor-pointer">
                    <li>Teams</li>
                    <li>Our Partners</li>
                    <li>Career</li>
                    <li>Affiliates</li>
                </ul>
            </span>

            {/* Social Media Handles */}
            <span className=" text-nowrap">
                <p className="text-md font-medium mb-6">Follow Us</p>
                <ul className="flex flex-col gap-3 cursor-pointer">
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>Snapchat</li>
                </ul>
            </span>
        </div>
        
    </div>
  );
};

export default Footer;
