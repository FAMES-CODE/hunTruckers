import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Index from "./../components/PlayersComponents/index";
import Player from "./../components/PlayersComponents/Player";

export default function User() {
  return (
    <div className="text-white bg-cover bg-no-repeat ">
      <Navbar />
      <div className="px-8 pt-8 bg-[#161f27] min-h-screen">
        {useParams().pid ? (
          <div>
            <Player />
          </div>
        ) : (
          <div>
            {" "}
            <Index />
          </div>
        )}
      </div>
    </div>
  );
}
