import React from "react";
import error from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img className="w-fit mx-auto" src={error} alt="" />
      <h1 className="text-5xl font-semibold mb-2">Oops, page not found!</h1>
      <p className="text-xl text-gray-500 mb-4">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="btn mb-8 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
