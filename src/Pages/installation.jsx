import download from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import { toast } from "react-toastify";
import useAppData from "../Hooks/useAppData";
import Loading from "../Component/Loading";
import { loadAppList } from "../utilis/LocalStorage";
import { useState } from "react";

const Installation = () => {
  const { loading } = useAppData();
  const [appList, setAppList] = useState(() => loadAppList());
  const [sortOrder, setSortOrder] = useState("none");

  const sortedItem = (() => {
    if (sortOrder === "app-asc") {
      return [...appList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "app-desc") {
      return [...appList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return appList;
    }
  })();

  //  const handleInstallApp = () => {
  //     const existingApp = JSON.parse(localStorage.getItem("installed"));
  //     let updateApp = [];
  //     if (existingApp) {
  //       const isDuplicate = existingApp.some((p) => p.id === app.id);
  //       if (isDuplicate) return;
  //       updateApp = [...existingApp, app];
  //     } else {
  //       updateApp.push(app);
  //     }
  //     localStorage.setItem("installed", JSON.stringify(updateApp));
  //     console.log(updateApp);
  //   };

  //remove from localstorage
  const handleRemoveApp = (id) => {
    const existingApp = JSON.parse(localStorage.getItem("installed"));
    let updateApp = existingApp.filter((p) => p.id !== id);
    localStorage.setItem("installed", JSON.stringify(updateApp));
    setAppList(updateApp);
    toast("App removed");
  };

  return (
    <div className="space-y-3 max-w-7xl mx-auto my-20">
      <h1 className="text-5xl font-bold text-center">Your Installed Apps</h1>
      <p className="text-xl text-gray-500 text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between mt-10 mb-4">
        <p className="text-2xl font-semibold">({appList.length}) Apps Found</p>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort</option>
            <option value="app-asc">Low-&gt;High</option>
            <option value="app-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="mb-4 border border-gray-100 ">
        {loading ? (
          <Loading />
        ) : (
          sortedItem.map((p) => (
            <div
              key={p.id}
              className="flex justify-between items-center shadow-md p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20 rounded-xl object-cover"
                  src={p.image}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">{p.title}</h4>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <img className="h-4" src={download} alt="" />
                      <p>{p.downloads}M</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img className="h-4" src={ratingsImg} alt="" />
                      <p>{p.ratingAvg}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-gray-500">{p.size}MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemoveApp(p.id)}
                className="btn btn-success text-white"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
