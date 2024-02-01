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

  if (vtcdata && Array.isArray(vtcdata)) {
    return (
      <div>
        {vtcdata.map((e) => {
          document.title = e.response.name || "VTC";
          return (
            <div className="">
              {/* VTC Profil */}

              <div
                className="relative min-h-96 bg-[#34465a] bg-no-repeat bg-center lg:bg-cover rounded-t-lg "
                style={{ backgroundImage: `url(${e.response.cover})` }}
              >
                <div className="relative z-10 flex justify-center items-center  top-[30vh]  lg:top-[40vh] ">
                  <img
                    src={e.response.logo}
                    className="absolute rounded-full blur-3xl "
                    alt=""
                  />
                  <img
                    src={e.response.logo}
                    className="absolute rounded-full "
                    alt=""
                  />
                </div>
              </div>

              <div className="bg-[#34465a] rounded-b-lg h-full px-8 lg:px-20 py-8">
                <div className=" flex justify-between items-center w-full ">
                  {/* Left side */}

                  <div>
                    <div className="flex gap-4 items-end">
                      <h1 className="font-bold text-xl lg:text-4xl">
                        {e.response.name}
                      </h1>
                      {e.response.verified ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="30"
                            width="30"
                            viewBox="0 0 512 512"
                          >
                            <title>Verified</title>
                            <path
                              fill="#005eff"
                              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                            />
                          </svg>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    <h1 className="lg:text-xl italic">{e.response.slogan}</h1>
                  </div>

                  {/* Right side */}

                  <div className="text-right">
                    <h1 className="text-xl">
                      Owned by :
                      <a
                        href={`../players/${e.response.owner_id}`}
                        className="text-xl italic"
                      >
                        {e.response.owner_username}
                      </a>
                    </h1>
                    <h1 className=" lg:text-xl italic">
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
                <div className="flex flex-col md:flex-row justify-around pt-8 uppercase font-bold">
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

              <div className="flex flex-col justify-around mt-8  py-8 gap-20">
                <div className=" bg-[#34465a] rounded-lg mx-20 py-8  ">
                  <VtcSocials props={e.response.socials} />
                </div>
                <div className="bg-[#34465a] rounded-lg px-20 py-8 w-full overflow-auto max-h-96">
                  <VtcMember VtcId={vtcid} />
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
