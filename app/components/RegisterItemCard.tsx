import React from "react";
import Image from "next/image";

type Props = {
  color: string;
  title: string;
  src: string;
  msg: string
};

const RegisterItemCard = (props: Props) => {
  return (
    <div className="md:w-[330px] md:h-[205px] bg-[#] rounded-lg grid grid-row-3 justify-center items-center cursor-pointer hover:scale-[0.98] border">
        <Image 
        width={50}
        height={50}
        src={props.src} 
        alt={props.title} 
        className={`color-[${props.color}] justify-self-center`}/>
        <p className="text-2xl font-medium text-center"> {props.title}</p>
        <p className="text-center">{props.msg}</p>
    </div>
  );
};

export default RegisterItemCard;
