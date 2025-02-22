import React from "react";
import FeaturedDownloads from "../components/FeaturedDownloads";

function Downloads() {
  return (
    <div className="bg-black flex flex-col  min-h-screen">
     
      <div className="w-[90rem] p-4 flex gap-8">
        {/* Left Side - Image */}
        <div className="w-1/2 ml-[4rem]">
          <img
            src="./src/assets/images/download1.jpg"
            alt="Red Dead Redemption 2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2 flex flex-col justify-center text-white">
          <h2 className="text-5xl font-bold mb-2">Red Dead Redemption 2</h2>
          <p className="text-lg mb-4">
            America, 1899. The end of the Wild West era has begun as lawmen hunt
            down the last remaining outlaw gangs. Those who will not surrender
            or succumb are killed.
            <br />
            <br />
            After a robbery goes terribly wrong in the western town of
            Blackwater, Arthur Morgan and the Van der Linde gang are forced to
            flee. With federal agents and the best bounty hunters in the nation
            massing on their heels, the gang must rob, steal, and fight their
            way across the rugged heartland of America in order to survive. As
            deepening internal divisions threaten to tear the gang apart, Arthur
            must make a choice between his own ideals and loyalty to the gang
            who raised him.
          </p>
          <button className="bg-black-600 border border-white text-white w-[16rem] h-[4rem] font-bold text-xl rounded-md hover:bg-yellow-500 hover:text-black transition">
            Download Now
          </button>
        </div>
      </div>

    
      <div><FeaturedDownloads/></div>
    </div>
  );
}

export default Downloads;
