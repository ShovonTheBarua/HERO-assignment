import React, { useState } from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "./AppCard";

const Apps = () => {
  const { appData } = useAppData();
  const [search, setSearch] = useState("");
  // const [found, setFound] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? appData.filter((data) => data.title.toLocaleLowerCase().includes(term))
    : appData;

  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Our All Applications</h1>
        <p className="text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between">
        <p className="text-2xl font-semibold">
          ({searchedApps.length}) Apps Found
        </p>

        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search App"
          />
        </label>
      </div>

      {/* no apps */}
      {searchedApps.length === 0 && (
        <h1 className="w-fit mx-auto my-20 text-6xl font-bold text-gray-500">
          No App Found
        </h1>
      )}

      <div className="grid gap-4 my-10  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl">
        {searchedApps.map((data) => (
          <AppCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
