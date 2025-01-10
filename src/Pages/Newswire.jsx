export default function Newswire() {
  return (
    <div>
      <div className="Body bg-black w-full min-h-screen flex flex-wrap">
        <div className="image w-4/6">
          <img
            src="/newswire1.jpg"
            alt="GTA"
            className="w-full h-auto object-cover cursor-pointer"
          />
        </div>

        <div className="Rightoptions text-white w-2/6 flex flex-col items-start justify-center p-4">
          <div className="text-2xl font-bold text-white-400">
            <a href="">GTA Online </a>
          </div>
          <h2 className="text-4xl mt-2 font-bold">
            <a href="">GTA Online:Agents Of Sabotage Now Available</a>
          </h2>
        </div>
      </div>
      <div></div>
    </div>
  );
}
