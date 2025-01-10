import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [hideOption, setHideOption] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function TogglenavOption() {
    setHideOption(!hideOption);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="Header border-b-2 border-gray-900 w-full h-full px-10 py-2 flex items-center justify-between bg-black">
      <div className="image cursor-pointer">
        <img
          src="./src/assets/images/download.png"
          alt=""
          className="w-14 h-14 object-cover"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>

      {/* Middle Options (Hidden on Mobile) */}
      <div
        className={`MiddleOptions md:flex items-center cursor-pointer font-semibold space-x-10 ${
          menuOpen ? "flex flex-col space-y-4" : "hidden"
        } md:space-y-0 md:space-x-10 text-center md:flex-row md:static absolute bg-black w-full left-0 top-16 z-10 md:z-auto md:w-auto md:h-auto md:p-0 p-4`}
      >
        <a href="" className="text-white">
          Games{" "}
          <i className="fa-solid fa-angle-down" onClick={TogglenavOption}></i>
        </a>
        <Link to="/newswire" className="text-white">
          Newswire
        </Link>
        <Link to="/videos" className="text-white">
          Videos
        </Link>
        <Link to="/downloads" className="text-white">
          Downloads
        </Link>
        <a href="" className="text-white">
          Store <i className="fa-solid fa-up-right-from-square"></i>
        </a>
        <a href="" className="text-white">
          Support <i className="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>

      {/* Right Options */}
      <div
        className={`RightOptions ${
          menuOpen ? "flex flex-col space-y-4" : "hidden"
        } md:flex md:flex-row space-x-10 md:space-y-0`}
      >
        <button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-600 transition-all duration-300 ease-in-out">
          Get Launcher
        </button>
        <i className="fa-solid fa-magnifying-glass text-white text-xl"></i>
        <i className="fa-solid fa-user text-white text-xl"></i>
      </div>
    </div>
  );
}
