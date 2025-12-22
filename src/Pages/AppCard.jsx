import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const AppCard = ({ data }) => {
  const { title, companyName, image } = data;
  return (
    <div className="p-4 shadow-2xl ">
      <div className="flex">
        <img
          className="rounded-lg mx-auto h-68 object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-medium">{title}</h3>
        <span className="flex justify-between">
          <button className="flex gap-2 p-2 items-center rounded-md text-[#00D390] bg-[#F1F5E8]">
            <MdOutlineFileDownload />
            9M
          </button>
          <button className="flex gap-2 p-2 items-center rounded-md text-[#FF8811] bg-[#FFF0E1]">
            <FaStar />5
          </button>
        </span>
      </div>
    </div>
  );
};

export default AppCard;
