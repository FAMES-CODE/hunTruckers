import { useParams } from "react-router-dom";
import Navbar from "./../components/navbar";
import VtcPage from "../components/VtcComponents/VtcPage";
import Index from "./../components/VtcComponents/Index";

export default function Vtc() {
  return (
    <div className="bg-[#2d3e4e] text-white">
      <Navbar />
      <div className="p-8 bg-[#161f27] min-h-screen">
        {useParams().vtcid ? (
          <div>
            <VtcPage />
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
