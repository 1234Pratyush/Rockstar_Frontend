import React from "react";
import ImageCard from "../components/ImageCard";

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
    src: "./src/assets/images/revolver.jpg",
    title: "GTA Online",
    description:
      "The New Bravado Banshee GTS Sports Car: Free To Claim for GTA+ Members",
  },
  {
    src: "./src/assets/images/tm.jpg",
    title: "GTA Online",
    description:
      "The New Bravado Banshee GTS Sports Car: Free To Claim for GTA+ Members",
  },
  {
    src: "./src/assets/images/wildmetal.jpg",
    title: "GTA Online",
    description:
      "The New Bravado Banshee GTS Sports Car: Free To Claim for GTA+ Members",
  },
  {
    src: "./src/assets/images/thrasher.jpg",
    title: "GTA Online",
    description:
      "The New Bravado Banshee GTS Sports Car: Free To Claim for GTA+ Members",
  },
  {
    src: "./src/assets/images/oni.jpg",
    title: "GTA Online",
    description:
      "The New Bravado Banshee GTS Sports Car: Free To Claim for GTA+ Members",
  },
  {
    src: "./src/assets/images/manhunt.jpg",
    title: "GTA Online",
    description:
      "The New Bravado Banshee GTS Sports Car: Free To Claim for GTA+ Members",
  },
  {
    src: "./src/assets/images/maxpayne.jpg",
    title: "GTA Online",
    description:
      "The New Bravado Banshee GTS Sports Car: Free To Claim for GTA+ Members",
  },
  {
    src: "./src/assets/images/online.jpg",
    title: "GTA Online",
    description:
      "The New Bravado Banshee GTS Sports Car: Free To Claim for GTA+ Members",
  },
];

export default function Newswire() {
  return (
    <div className="body bg-black w-full min-h-screen flex flex-wrap">
      <div className="image w-[63rem]  h-[38rem]">
        <img
          src="/src/assets/images/gta12.jpg"
          alt="GTA"
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>

      <div className="Rightoptions text-white w-full sm:w-3/6 md:w-2/6 lg:w-2/6 flex flex-col items-start justify-center p-4">
        <div className="text-2xl font-bold text-white-400">
          <a href="">GTA Online</a>
        </div>
        <h2 className="text-4xl mt-2 font-bold">
          <a href="">GTA Online: Agents Of Sabotage Now Available</a>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-6 p-6 w-full mt-8">
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
      
    </div>
    
  );
}
