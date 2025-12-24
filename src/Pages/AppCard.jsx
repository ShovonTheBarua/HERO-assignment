import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ data }) => {
  // console.log(data);
  const { title, image, id, downloads, ratingAvg } = data;
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="p-4 shadow-2xl hover:scale-102 transition ease-in-out">
        <div className="flex">
          <img
            className="rounded-lg mx-auto h-68 object-cover"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium my-2 text-center">{title}</h3>
          <span className="flex justify-between">
            <button className="flex gap-2 p-2 items-center rounded-md text-[#00D390] bg-[#F1F5E8]">
              <MdOutlineFileDownload />
              {downloads}M
            </button>
            <button className="flex gap-2 p-2 items-center rounded-md text-[#FF8811] bg-[#FFF0E1]">
              <FaStar />
              {ratingAvg}
            </button>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
