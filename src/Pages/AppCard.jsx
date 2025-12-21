import React from "react";

const AppCard = ({ data }) => {
  const { title, companyName, image } = data;
  return (
    <div>
      <img className="" src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <span>
          <button>9M</button>
          <button>5</button>
        </span>
      </div>
    </div>
  );
};

export default AppCard;
