import { Link,Route } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer w-full h-[30rem] bg-black text-white flex flex-col">
      {/* Links and Language Selector in the Same Row */}
      <div className="flex justify-between items-center mt-14 px-16">
        {/* Links Section */}
        <div className="flex gap-6 font-arial text-lg font-bold">
          <a href="#" className="hover:text-yellow-300">
            Contact
          </a>
          <a href="#" className="hover:text-yellow-300">
            Carriers
          </a>
          <a href="#" className="hover:text-yellow-300">
            Community Guidelines
          </a>
          <a href="#" className="hover:text-yellow-300">
            Subscribe
          </a>
        </div>

        {/* Language Selector Section */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <i className="fa-solid fa-globe "></i>

          <a href="#" className="no-underline">
            Select a Language
          </a>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>

      {/* "Hello" Section */}
      <div className="mt-6 ml-16 ">
        
          <div className="p-2">
            <a className="cursor-pointer text-gray-400 hover:text-yellow-300 ">
              Corporate
            </a>
          </div>
      

        
          <div className="p-2">
            <a className="cursor-pointer text-gray-400 hover:text-yellow-300 ">
              Privacy{" "}
            </a>
          </div>
       

        <div className="p-2">
          <a className="cursor-pointer text-gray-400 hover:text-yellow-300 ">
            Cookie Settings
          </a>
        </div>

        <div className="p-2 cursor-pointer text-gray-400 hover:text-yellow-300">
          <a>Cookie Policy </a>
        </div>

        <div className="p-2">
          <a className="cursor-pointer text-gray-400 hover:text-yellow-300 ">
            Legal
          </a>
        </div>

        <div className="p-2">
          <a className="cursor-pointer text-gray-400 hover:text-yellow-300 ">
            Do Not Sell or Share My Personal Information
          </a>
        </div>
      </div>

      <div className="flex ml-16 mt-20 gap-4 ">
        <div>Rockstar Games</div>

        <div className="flex justify-center items-center flex-grow gap-4">
          <div>New York</div>
          <div>London</div>
          <div>Paris</div>
          <div>Bogota</div>
        </div>
      </div>
    </div>
  );
}
