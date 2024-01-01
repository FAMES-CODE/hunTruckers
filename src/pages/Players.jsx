import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Index from "./../components/PlayersComponents/index";

export default function User() {
  return (
    <div className="bg-[#2d3e4e] w-full h-screen text-white ">
      <Navbar />
      <div className="px-8 pt-8">{useParams().pid ? <Index /> : <div> R</div>}</div>
    </div>
  );
}
