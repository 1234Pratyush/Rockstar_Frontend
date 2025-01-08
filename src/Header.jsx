import Newswire from "./Pages/Newswire"
import {Link} from 'react-router-dom'
import { Route, Routes } from "react-router-dom"
import { useState } from "react"

export default function Header() {
    const [hideOption,setHideOption] = useState(false);

    function TogglenavOption(){
        setHideOption(!hideOption)
    }
    return (
        <div className="Header border border-gray-900 w-full h-full rounded-sm p-4 flex items-center bg-black flex flex-wrap ">

            <div className="image cursor-pointer ml-10" >
                <img src="download.png" alt="" className="w-14 h-14 object-cover ;" />
            </div>
            <div className="MiddleOptions flex space-x-10 	display: flex cursor-pointer ml-96">
                <a href="" className="text-white ">Games <i class="fa-solid fa-angle-down" onClick={TogglenavOption}></i></a>
                <Link to="Newswire" className="text-white">Newswire</Link>
                <Link to="Videos" className="text-white">Videos</Link>
                <Link to="Downloads" className="text-white">Downloads</Link>
               
                <a href="" className="text-white ">Store <i class="fa-solid fa-up-right-from-square"></i></a>
                <a href="" className="text-white ">Support <i class="fa-solid fa-up-right-from-square"></i></a>
            </div>

            <div className="RightOptions 	display: flex; cursor-pointer space-x-10 ml-28">
            <button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-600 transition-all duration-300 ease-in-out ">Get Launcher</button>
             <i class="fa-solid fa-magnifying-glass text-white text-xl"></i>
             <i class="fa-solid fa-user text-white text-xl"></i>

            </div>
            <Routes>
                <Route path="Newswire" element={<Newswire/>}></Route>
            </Routes>
        </div>

        
  
    );
}
