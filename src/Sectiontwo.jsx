export default function Sectiontwo() {
    return (
    <div className="Sectiontwo ml-14 mt-10">
     
        <div className="text-white text-3xl font-bold cursor-pointer mb-5">
          Featured Games
        </div>
  
      
        <div className="flex justify-center items-center cursor-pointer">
         <div className="image border border-black w-[88rem] h-[25rem] rounded-md overflow-hidden transform transition-transform duration-500 hover:scale-105">
           <img src="./oldimage.png" alt="Featured Game" className="w-full h-full object-cover" />
           </div>
        </div>

        
        <div className="cardsrow1 flex justify-center mt-10 gap-10  cursor-pointer">
      
          <div className="card1 h-[20rem]  w-[21rem] rounded border border-black overflow-hidden bg-black transform transition-transform duration-500 hover:scale-105">
            <img
              className="object-cover h-full w-full"
              src="/oldimage1.jpg"
              alt="GTA Online"
            />
            </div>
          <div className="card1 h-[20rem] w-[20rem] rounded border border-black overflow-hidden bg-black transform transition-transform duration-500 hover:scale-105">
            <img
              className="object-cover h-full w-full"
              src="/oldimage2.jpg"
              alt="GTA Online"
            />
            </div>
          <div className="card1 h-[20rem] w-[20rem] rounded border border-black overflow-hidden bg-black transform transition-transform duration-500 hover:scale-105">
            <img
              className="object-cover h-full w-full"
              src="/oldimage3.jpg"
              alt="GTA Online"
            />
            </div>
          <div className="card1 h-[20rem] w-[20rem] rounded border border-black overflow-hidden bg-black transform transition-transform duration-500 hover:scale-105">
            <img
              className="object-cover h-full w-full"
              src="/oldimage4.jpg"
              alt="GTA Online"
            />
            </div>
            </div>

            <div className="flex items-center justify-center mt-14">
  <div className="text-white flex items-center justify-center border-b-4 border-yellow-500 text-xl font-bold cursor-pointer w-40 h-12 rounded hover:bg-yellow-500 hover:text-black transition-all duration-500 ease-out">
    View More
  </div>
</div>

       </div>




      
    );
  }
  