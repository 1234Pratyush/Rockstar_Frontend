import SectionOne from "./SectionOne";
import Sectiontwo from "./Sectiontwo";
import SectionThree from "./SectionThree";
export default function NewBody() {
    return (
        <div className="Body bg-black w-full min-h-screen flex flex-wrap">
    
            <div className="image w-4/6">
                <img src="/gta.jpg" alt="GTA" className="w-full h-auto object-cover cursor-pointer" />
            </div>

            <div className="Rightoptions text-white w-2/6 flex flex-col items-start justify-center p-4">
                <div className="text-xl text-gray-400"><a href="">Grand Theft Auto VI</a></div>
                <h2 className="text-4xl mt-2 font-bold"><a href="">Trailer 1</a></h2>
                <button className="text-xl font-bold mt-4 border border-white text-white hover:bg-yellow-500 hover:text-black px-14 py-4 rounded transition-all duration-300">
                    WATCH NOW
                </button>
            </div>

            <div className="Sectionone">
                <SectionOne/>
            </div>
            <div className="Sectiontwo">
                <Sectiontwo/>
            </div>
         
          
        </div>
        
    );
}
