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
    <div className="Header border-b-2 border-gray-900 w-full h-full px-10 py-2 flex items-center justify-between bg-[#020202] relative z-50">
      <div className="image cursor-pointer">
        <Link to="/">
          <img
            src="./src/assets/images/download.png"
            alt=""
            className="w-14 h-14 object-cover"
          />
        </Link>
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
        className={`MiddleOptions md:flex items-center font-semibold space-x-10 ${
          menuOpen ? "flex flex-col space-y-4" : "hidden"
        } md:space-y-0 md:space-x-10 text-center md:flex-row md:static absolute bg-black w-full left-0 top-16 z-50 md:z-auto md:w-auto md:h-auto md:p-0 p-4`}
      >
        {/* Dropdown Section */}
        <div className="relative w-full md:w-auto ">
          <a
            href="#"
            className="text-white flex items-center justify-center"
            onClick={TogglenavOption}
          >
            <p>Games </p>
            <p>
              {hideOption ? (
                <i className="fa-solid fa-angle-down ml-2"></i>
              ) : (
                <i className="fa-solid fa-angle-up ml-2"></i>
              )}
            </p>
          </a>
        </div>

        <Link to="/newswire" className="text-white">
          Newswire
        </Link>
        <Link to="/videos" className="text-white">
          Videos
        </Link>
        <Link to="/downloads" className="text-white">
          Downloads
        </Link>
        <a href="#" className="text-white">
          Store <i className="fa-solid fa-up-right-from-square"></i>
        </a>
        <a href="#" className="text-white">
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
      <div
        className={`${
          hideOption ? "h-96 opacity-100" : "h-0 opacity-0"
        } w-full left-0 bg-[#121212] text-white absolute top-16 flex items-center justify-center border border-black overflow-hidden transition-all duration-500 ease-in-out`}
      >
        hello
      </div>
    </div>
  );
}
