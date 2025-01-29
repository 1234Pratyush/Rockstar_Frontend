import React from "react";

export default function Newswire() {
  return (
    <div>
  <div className="Body bg-black w-full min-h-screen flex flex-wrap">
  <div className="image w-[63rem]  h-[38rem]" >
    <img
      src="/src/assets/images/lunar.jpg"
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
      </div>
      <div></div>
    </div>
  );
}
