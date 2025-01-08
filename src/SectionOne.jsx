import React from 'react'

const data = [{
  src:"/ef5336dc5e15531d52da9b79c53d8ea32888063f.jpg",
  title:"GTA Online",
  description:"GTA Online: Agents of Sabotage Now Available"
},
{
  src:"/capsule_616x353.jpg",
  title:"Read Dead Online",
  description:"Have a Blast In This Holiday Season In Read Dead Online"
},
{
  src:"/capsule_616x353 (1).jpg",
  title:"Rockstar Games",
  description:"Have a Blast In This Holiday Season In Read Dead Online"
}];

function Comp({path,title,description}) {
  return (
    <div className="card1 h-[40rem] w-[28rem] rounded border border-slate-700 overflow-hidden bg-black">
            <img
              className="object-cover h-[70%] w-full"
              src={path}
              alt={title}
            />
            <div className="p-6 bg-black-900 h-[30%] ">
              <p className="text-white text-base font-semibold">{title}</p>
              <h2 className="text-white text-2xl font-bold mt-2">
               {description}
              </h2>
            </div>
     </div>
  )
}

export default function SectionOne() {
    return (
      <div className="Section1 mt-20">
       
        <div>
          <h1 className="text-white text-3xl cursor-pointer ml-14 font-bold cursor-pointer">Newswire</h1>
        </div>
  
     
        <div className="cardsrow1 flex justify-center mt-10 gap-10 ml-14 cursor-pointer">
          {
            data.map((item)=>{
             return <Comp path={item.src} title={item.title} description={item.description} key={item.title}/>;
            })
          }
      
        </div>

        <div className=" cardsrow2 mt-10 ml-14 flex ml-14 gap-10 cursor-pointer">
        <div className="card4 h-[40rem] w-[28rem] rounded border border-slate-700 overflow-hidden bg-black">
            <img
              className="object-cover h-[70%] w-full"
              src="./BountyBonusesWeek-GTAOe-Header.webp"
              alt="GTA Online"
            />
            <div className="p-6 bg-black-900 h-[30%] ">
              <p className="text-white text-base font-semibold">GTA Online</p>
              <h2 className="text-white text-2xl font-bold mt-2">
                GTA Online: Agents of Sabotage Now Available
              </h2>
            </div>
          </div>

          <div className="card5 h-[40rem] w-[28rem] rounded border border-slate-700 overflow-hidden bg-black">
            <img
              className="object-cover h-[70%] w-full"
              src="/far-cry-3-review-hero-b.0.1488319854.webp"
              alt="GTA Online"
            />
            <div className="p-6 bg-black-900 h-[30%] ">
              <p className="text-white text-base font-semibold">Far Cry 3 Online</p>
              <h2 className="text-white text-2xl font-bold mt-2">
                Play Far Cry
              </h2>
            </div>
          </div>

          <div className="card6 h-[40rem] w-[28rem] rounded border border-slate-700 overflow-hidden bg-black">
            <img
              className="object-cover h-[70%] w-full"
              src="./80d0fui3apob1.jpg"
              alt="GTA Online"
            />
            <div className="p-6 bg-black-900 h-[30%] ">
              <p className="text-white text-base font-semibold">GTA Online</p>
              <h2 className="text-white text-2xl font-bold mt-2">
                The New Bravado Banshee GTS Sports Car:Free To Claim for GTA<sup>+</sup>Members
              </h2>
            </div>
          </div>


      </div>

     <div className="flex items-center justify-center mt-14">
  <div className="text-white flex items-center justify-center  border-b-4 border-yellow-500 text-xl font-bold cursor-pointer w-40 h-12 rounded hover:bg-yellow-500 hover:text-black transition-all duration-500 ease-in-out">
    View More
  </div>
</div>

      
      </div>
    );
  }
  