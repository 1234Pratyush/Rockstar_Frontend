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
    <div className="Section1 mt-20">
      <div>
       
          
          <h1 className="text-white text-3xl cursor-pointer ml-14 font-bold ">
            Newswire
          </h1>
      
      </div>

      <div className="cardsrow1 flex justify-center mt-10 gap-10 ml-14 cursor-pointer">
        {data.map((item) => {
          return (
            <ImageCard
              path={item.src}
              title={item.title}
              description={item.description}
              key={item.title}
            />
          );
        })}
      </div>
      <div className=" cardsrow2 mt-10 ml-14 flex gap-10 cursor-pointer">
        {data2.map((item) => {
          return (
            <ImageCard
              path={item.src}
              title={item.title}
              description={item.description}
              key={item.title}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-center mt-14">
        <div className="text-white flex items-center justify-center  border-b-4 border-yellow-500 text-xl font-bold cursor-pointer w-40 h-12 rounded hover:bg-yellow-500 hover:text-black transition-all duration-500 ease-in-out">
          View More
        </div>
      </div>
    </div>
  );
}
