import React from "react";
import ImageCard from "./ImageCard";

const data = [
  {
    src: "./src/assets/images/ef5336dc5e15531d52da9b79c53d8ea32888063f.jpg",
    title: "GTA Online",
    description: "GTA Online: Agents of Sabotage Now Available",
  },
  {
    src: "./src/assets/images/capsule_616x353.jpg",
    title: "Read Dead Online",
    description: "Have a Blast In This Holiday Season In Read Dead Online",
  },
  {
    src: "./src/assets/images/capsule_616x353 (1).jpg",
    title: "Rockstar Games",
    description: "Have a Blast In This Holiday Season In Read Dead Online",
  },
];

const data2 = [
  {
    src: "./src/assets/images/BountyBonusesWeek-GTAOe-Header.webp",
    title: "GTA Online",
    description: "GTA Online: Agents of Sabotage Now Available",
  },
  {
    src: "./src/assets/images/far-cry-3-review-hero-b.0.1488319854.webp",
    title: "Far Cry 3 Online",
    description: "Play Far Cry",
  },
  {
    src: "./src/assets/images/80d0fui3apob1.jpg",
    title: "GTA Online",
    description:
      "The New Bravado Banshee GTS Sports Car: Free To Claim for GTA+ Members",
  },
];

export default function SectionOne() {
  return (
    <div className="Section1 mt-20 px-4 md:px-14">
      {/* Title */}
      <div className="text-center md:text-left">
        <h1 className="text-white text-3xl font-bold cursor-pointer">
          Newswire
        </h1>
      </div>

      {/* First Row */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <ImageCard
            path={item.src}
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>

      {/* Second Row */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data2.map((item) => (
          <ImageCard
            path={item.src}
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex items-center justify-center mt-14">
        <button className="text-white border-b-4 border-yellow-500 text-xl font-bold cursor-pointer w-40 h-12 rounded hover:bg-yellow-500 hover:text-black transition-all duration-500 ease-in-out">
          View More
        </button>
      </div>
    </div>
  );
}
