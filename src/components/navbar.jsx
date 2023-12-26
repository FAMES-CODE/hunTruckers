export default function Navbar() {
  return (
    <div className="bg-[#2a3748] w-96 h-screen flex justify-center items-center border-r-8 border-slate-500 text-xl">
      <div className="text-center h-full font-bold">
        <div className="h-1/4 w-48 flex justify-center items-center">
          <h1 className="bg-slate-500 flex justify-center items-center h-[20%] w-[100%] rounded-xl">Home</h1>
        </div>
        <div className="h-1/4 w-48 flex justify-center items-center">
          <h1 className="bg-slate-500 flex justify-center items-center h-[20%] w-[100%] rounded-xl">Players</h1>
        </div>
        <div className="h-1/4 w-48 flex justify-center items-center">
          <h1 className="bg-slate-500 flex justify-center items-center h-[20%] w-[100%] rounded-xl">VTC</h1>
        </div>
        <div className="h-1/4 w-48 flex justify-center items-center">
          <h1 className="bg-slate-500 flex justify-center items-center h-[20%] w-[100%] rounded-xl">About</h1>
        </div>
      </div>
    </div>
  );
}
