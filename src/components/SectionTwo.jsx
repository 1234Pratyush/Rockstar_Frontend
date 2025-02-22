export default function SectionTwo() {
  return (
    <div className="Sectiontwo mt-10 px-4 md:px-14">
      {/* Title */}
      <div className="text-white text-3xl font-bold cursor-pointer mb-5 text-center md:text-left">
        Featured Games
      </div>

      {/* Featured Image */}
      <div className="flex justify-center items-center cursor-pointer">
        <div className="image border border-black w-full max-w-screen-xl h-[25rem] rounded-md overflow-hidden transform transition-transform duration-500 hover:scale-105">
          <img
            src="./src/assets/images/oldimage.png"
            alt="Featured Game"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        {[
          "oldimage1.jpg",
          "oldimage2.jpg",
          "oldimage3.jpg",
          "oldimage4.jpg",
        ].map((img, index) => (
          <div
            key={index}
            className="h-[20rem] rounded border border-black overflow-hidden bg-black transform transition-transform duration-500 hover:scale-105"
          >
            <img
              className="object-cover h-full w-full"
              src={`./src/assets/images/${img}`}
              alt="GTA Online"
            />
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex items-center justify-center mt-14">
        <button className="text-white flex items-center justify-center border-b-4 border-yellow-500 text-xl font-bold cursor-pointer w-40 h-12 rounded hover:bg-yellow-500 hover:text-black transition-all duration-500 ease-out">
          View More
        </button>
      </div>
    </div>
  );
}
