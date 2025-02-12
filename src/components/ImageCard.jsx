import React from "react";

const ImageCard = ({ path, title, description }) => {
  return (
    <div className="card1 h-[40rem] w-[28rem] rounded-lg border border-slate-700 overflow-hidden bg-black">
      <img className="object-cover h-[70%] w-full" src={path} alt={title} />
      <div className="p-6 bg-black-900 h-[30%] ">
        <p className="text-white text-base font-semibold">{title}</p>
        <h2 className="text-white text-2xl font-bold mt-2">{description}</h2>
      </div>
    </div>
  );
};

export default ImageCard;
