export default function Footer() {
    return (
      <div className="footer  w-full h-[30rem] bg-black text-white flex ">
       <div  className=" flex gap-6 arial text-lg font-bold mt-14 ml-16 ">
        <a href="" className="hover:text-yellow-300">Contact</a>
        <a href="" className="hover:text-yellow-300">Carriers</a>
        <a href=""  className="hover:text-yellow-300">Community Guidelines</a>
        <a href=""  className="hover:text-yellow-300">Subscribe</a>
        </div>

        <div className="mt-14 ml-[47rem]  space-x-2">
          <i className="fa-solid fa-globe"></i>
            <a href="#" className="no-underline">Select a Language</a>
           <i className="fa-solid fa-caret-down"></i>
        </div>

        {/* <div>
  <a href="" className="block">Corporate</a>
  <a href="" className="block">Privacy</a>
  <a href="" className="block">Cookie Settings</a>
  <a href="" className="block">Cookie Policy</a>
  <a href="" className="block">Legal</a>
  <a href="" className="block">Do Not Sell Or Share My Personal Information</a>
</div> */}



        </div>
  
     
    );
  }
  