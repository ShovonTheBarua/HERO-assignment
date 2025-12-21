import React from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "./AppCard";

const Home = () => {
  const { appData } = useAppData();

  const trendingData = appData.slice(0, 27);
  return (
    <div>
      <h1>Trending Apps</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl">
        {trendingData.map((data) => (
          <AppCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
