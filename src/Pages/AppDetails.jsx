import React, { useState } from "react";
import useAppData from "../Hooks/useAppData";
import { useParams } from "react-router";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import download from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import revImg from "../../assets/icon-review.png";
import error from "../../assets/App-Error.png";
import { Link } from "react-router";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";
import Loading from "../Component/Loading";

const AppDetails = () => {
  const [installed, setInstalled] = useState(true);
  const { appData, loading } = useAppData();
  // console.log(appData);
  const params = useParams();
  const { id } = params;
  if (loading) return <Loading />;
  const app = appData.find((p) => String(p.id) === id);

  // local storage
  const handleInstallApp = () => {
    const existingApp = JSON.parse(localStorage.getItem("installed"));
    let updateApp = [];
    if (existingApp) {
      const isDuplicate = existingApp.some((p) => p.id === app.id);
      if (isDuplicate) return;
      updateApp = [...existingApp, app];
    } else {
      updateApp.push(app);
    }
    localStorage.setItem("installed", JSON.stringify(updateApp));
    console.log(updateApp);
  };

  // console.log(app);
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    detailedDescription,
  } = app || {};

  // console.log(ratings);

  if (app == undefined) {
    return (
      <div className="text-center my-20">
        <img className="w-fit mx-auto" src={error} alt="" />
        <h1 className="text-5xl font-semibold mb-2">Oops, App not found</h1>
        <p className="text-xl text-gray-500 mb-4">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="btn  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 max-w-7xl mx-auto">
      <div>
        {/* top */}
        <div className="max-w-7xl mx-auto flex  flex-col md:flex-row gap-10 mt-20">
          <img className="w-75 mx-auto object-cover" src={image} alt="" />
          <div className="w-[80%] md:w-full  mx-auto ">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <p className="text-xl text-gray-500">
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </p>

            <p className="border-b border-gray-300 my-7"></p>

            <div className="space-y-7  w-fit mx-auto md:mx-0">
              <div className="grid grid-cols-2 md:grid-cols-3 w-fit gap-8">
                <div className="space-y-2">
                  <img src={download} alt="" />
                  <p className="text-xl text-gray-500">Downloads</p>
                  <h1 className="text-4xl font-extrabold">{downloads}M</h1>
                </div>
                <div className="space-y-2">
                  <img src={ratingsImg} alt="" />
                  <p className="text-xl text-gray-500">Average Ratings</p>
                  <h1 className="text-4xl font-extrabold">{ratingAvg}</h1>
                </div>
                <div className="space-y-2 ">
                  <img src={revImg} alt="" />
                  <p className="text-xl text-gray-500">Total Reviews</p>
                  <h1 className="text-4xl font-extrabold">{reviews}</h1>
                </div>
              </div>
              <button
                onClick={() => {
                  setInstalled(false);
                  toast("App installed");
                  handleInstallApp();
                }}
                className="btn btn-success text-white"
              >
                {installed ? `Install Now (${size}MB)` : "installed"}
              </button>
            </div>
          </div>
        </div>
        <p className="border-b border-gray-300 my-10"></p>

        {/* bottom */}
        <div>
          <h1 className="text-2xl font-semibold mb-5">Ratings</h1>
          <BarChart
            style={{
              width: "100%",
              maxWidth: "100%",
              maxHeight: "40vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={ratings}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="count" />
            <Tooltip />
            <Legend />

            <Bar
              dataKey="count"
              fill="rgba(255, 136, 17, 1)"
              activeBar={{ stroke: "black" }}
              radius={[10, 10, 0, 0]}
            />
            {/* <RechartsDevtools /> */}
          </BarChart>
        </div>
        <p className="border-b border-gray-300 my-10"></p>
        <div className="mb-20">
          <h1 className="text-2xl font-semibold mb-5">Description</h1>
          <p>{detailedDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
