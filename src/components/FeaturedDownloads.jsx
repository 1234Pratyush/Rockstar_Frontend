import React from 'react'

function FeaturedDownloads() {
  return (
    <div className="text-white">
      <div className='text-3xl font-bold ml-[7rem]'>
        <h2>Featured Downloads</h2>
      </div>
      
        <div className="flex  items-center cursor-pointer ml-[7rem] mt-[2rem]">
        <div className="image border border-black w-[28rem] h-[13rem] rounded-md overflow-hidden transform transition-transform duration-500 ">
          <img
            src="./src/assets/images/oldimage.png"
            alt="Featured Game"
            className="w-full h-full object-cover"
          />
          </div>
          </div>

    </div>
  );
}

export default FeaturedDownloads