import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-white">
      <div className="flex justify-between items-center pl-8 pt-8  bg-[#34465a] h-36 font-bold border-b-2 border-slate-500">
        <div className="">
          <h1 className="text-6xl">hunTrucker</h1>
          <h2 className="text-xl italic font-medium">
            A TruckerMP stats tracker
          </h2>
        </div>
        <div className="w-1/3 flex font-medium text-xl uppercase">
          <Link to="/" className="mx-10">
            HOME
          </Link>
          <Link to="/Players" className="mx-10">
            Players
          </Link>
          <Link to="/VTC" className="mx-10">
            Vtc
          </Link>
          <Link to="/About" className="mx-10">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
