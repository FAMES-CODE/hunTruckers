import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetOneVtcInfo from "../../api/vtc";
import VtcGame from "./VtcGame";
import VtcSocials from "./VtcSocials";
import VtcMember from "./VtcMember";

function VtcPage() {
  const vtcid = useParams().vtcid;
  const [vtcdata, setvtcdata] = useState([]);

  useEffect(() => {
    GetOneVtcInfo(vtcid, setvtcdata);
  }, []);

  if (vtcdata.length > 0) {
    return (
      <div>
        {vtcdata.map((e) => {
          document.title = e.response.name || "VTC";
          return (
            <div className="">
              {/* VTC Profil */}

              <div className="bg-[#34465a] rounded-lg">
                <div
                  className="relative h-96 bg-no-repeat bg-cover rounded-t-lg "
                  style={{ backgroundImage: `url(${e.response.cover})` }}
                >
                  <img
                    src={e.response.logo}
                    className="absolute bottom-[-15vh] left-[42%] rounded-full blur-2xl"
                    alt=""
                  />
                  <img
                    src={e.response.logo}
                    className="absolute bottom-[-15vh] left-[42%] rounded-full "
                    alt=""
                  />
                </div>

                <div className="flex justify-between items-center w-full px-20 mt-16 pb-8">
                  {/* Left side */}

                  <div>
                    <div className="flex items-center">
                      <h1 className="font-bold text-4xl">{e.response.name}</h1>
                      {e.response.verified ? "verified logo" : ""}
                    </div>
                    <h1 className="text-xl italic">{e.response.slogan}</h1>
                  </div>

                  {/* Right side */}

                  <div>
                    <h1>
                      Owned by :
                      <a
                        href={`../players/${e.response.owner_id}`}
                        className="text-xl italic"
                      >
                        {e.response.owner_username}
                      </a>
                    </h1>
                    <h1 className="">
                      VTC Language :{" "}
                      <span className="text-xl italic">
                        {e.response.language}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>

              {/* VTC Game */}
              <div className="bg-[#34465a] rounded-lg mt-8 px-20 py-8">
                <h1 className="text-center text-2xl ">VTC Games</h1>
                <div className="flex justify-around pt-8 uppercase font-bold">
                  <div
                    className={
                      !e.response.games.ats ? "grayscale text-gray-400" : ""
                    }
                  >
                    <VtcGame
                      GameName={
                        e.response.games.ats ? "American Truck Simulator" : ""
                      }
                    />
                  </div>
                  <div
                    className={
                      !e.response.games.ets ? "grayscale text-gray-400" : ""
                    }
                  >
                    <VtcGame
                      GameName={
                        e.response.games.ets ? "Euro Truck Simulator 2" : ""
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-around mt-8 px-20 py-8 gap-20">
                <div className="bg-[#34465a] rounded-lg px-20 py-8  w-1/2">
                   <VtcSocials />
                </div>
                <div className="bg-[#34465a] rounded-lg px-2 py-8 text-center w-full overflow-auto max-h-96">
                   <VtcMember VtcId={vtcid}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-96 font-bold uppercase text-4xl">
        <h1 className="">VTC Not found</h1>
      </div>
    );
  }
}

export default VtcPage;
