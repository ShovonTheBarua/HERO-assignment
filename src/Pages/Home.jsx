import React from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "./AppCard";
import { Link } from "react-router";
import appStore from "../../assets/appStore.png";
import playStore from "../../assets/googlePlay.png";
import hero from "../../assets/hero.png";
import Loading from "../Component/Loading";

const Home = () => {
  const { appData, loading } = useAppData();

  const trendingData = appData.slice(0, 8);
  return (
    <div>
      {/* Title */}
      <div className="text-center px-2 mt-20">
        <h1 className="text-[#001931] text-7xl font-bold mb-4 ">
          We Build <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-gray-600">
          AtHERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>
      {/* button */}
      <div className="flex justify-center gap-3 my-14 px-3">
        <Link
          to="https://play.google.com/store/games?hl=en"
          className="flex items-center border border-gray-300 rounded-lg px-4 py-1"
        >
          <img src={playStore} alt="" />
          <p className="text-xl font-semibold pl-1">Google Play</p>
        </Link>
        <Link
          to="https://www.apple.com/app-store/"
          className="flex items-center border border-gray-300 rounded-lg px-4 py-1"
        >
          <img src={appStore} alt="" />
          <p className="text-xl font-semibold pl-1">App Store</p>
        </Link>
      </div>

      <img src={hero} className="mx-auto px-2" alt="" />

      {/* state cards  */}
      <div className="text-center px-2  py-20 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <h1 className="text-5xl font-bold mb-10">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid mx-auto max-w-7xl grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center space-y-4">
            <p>Total Downloads</p>
            <h1 className="text-6xl font-bold">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="text-center space-y-4">
            <p>Total Reviews</p>
            <h1 className="text-6xl font-bold">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className="text-center space-y-4">
            <p>Active Apps</p>
            <h1 className="text-6xl font-bold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>

      {/* Trending section */}
      <div className="my-20 px-3">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-4">Trending Apps</h1>
          <p className="text-gray-600">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid gap-4 my-10  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl">
            {trendingData.map((data) => (
              <AppCard data={data} />
            ))}
          </div>
        )}
        <Link
          to="/apps"
          className="block w-fit mx-auto px-16 py-4 rounded-lg text-white font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
