import React from "react";

const ImageCard = ({ path, title, description }) => {
  return (
    <div className="card1 w-full max-w-md rounded-lg border border-slate-700 overflow-hidden bg-black shadow-lg">
      {/* Image Section */}
      <img
        className="object-cover w-full h-64 sm:h-80 md:h-96"
        src={path}
        alt={title}
      />

      {/* Text Section */}
      <div className="p-4 md:p-6 bg-black">
        <p className="text-white text-sm sm:text-base font-semibold truncate">
          {title}
        </p>
        <h2 className="text-white text-lg sm:text-2xl font-bold mt-2 break-words">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default ImageCard;
