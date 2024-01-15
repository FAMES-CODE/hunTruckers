import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetonePlayerInfo from "./../../api/player";
import VtcExperience from "./VtcExperience";
import CurrentPlayerVtc from "./CurrentPlayerVtc";
import PlayerPermission from "./PlayerPermission";
import Loading from "./../Loading";
import RandomUser from "./RandomUser";
import SuggestedProfiles from "./SuggestedProfiles";

function Player() {
  var pid = useParams().pid;
  const [pdata, setpdata] = useState([]);
  useEffect(() => {
    GetonePlayerInfo(pid, setpdata);
  }, []);

  if (pdata && Array.isArray(pdata)) {
    return (
      <div className="flex flex-col lg:flex-row">
        <div>
          {pdata
            ? pdata.map((e) => {
                document.title = e.response.name;
                return (
                  <div
                    key={e.response.id}
                    className="flex-col lg:px-24  lg:w-[70vw] "
                  >
                    {/* Top section */}

                    <div className="flex-col justify-center items-center bg-[#34465a] rounded-lg">
                      <div
                        className=" bg-center bg-no-repeat rounded-t-lg px-8 p-6"
                        style={{
                          backgroundImage:
                            "url(https://i.imgur.com/0BDU0q9.jpg)",
                        }}
                      >
                        <img
                          src={e.response.avatar}
                          alt=""
                          className="relative bg-[#34465a] rounded-full w-1/2 lg:w-1/4 border-8 border-[#34465a] top-20 "
                        />
                      </div>

                      <div className="flex justify-between text-4xl mt-12 px-8 p-6">
                        {/* Left side */}

                        <div className="">
                          <h1 className="mt-2 font-bold ">{e.response.name}</h1>
                          <h2
                            className={`mt-2 font-medium text-2xl italic `}
                            style={{ color: e.response.groupColor }}
                          >
                            {e.response.groupName}
                          </h2>
                          <h3 className="mt-2 font-thinc text-xl text-[#8e8f92]">
                            Member since : {e.response.joinDate.split(" ", 1)}
                          </h3>

                          <div className="mt-2 lg:flex items-center text-base lg:gap-4  lg:w-full">
                            {e.response.permissions.isStaff ? (
                              <PlayerPermission props="Staff" />
                            ) : (
                              ""
                            )}
                            {e.response.permissions.isManagement ? (
                              <PlayerPermission props="Management" />
                            ) : (
                              ""
                            )}
                            {e.response.permissions.isGameAdmin ? (
                              <PlayerPermission props="Game Admin" />
                            ) : (
                              ""
                            )}
                          </div>

                          <a
                            href={
                              `https://truckersmp.com/user/` + e.response.id
                            }
                            className="bg-[#71b7fb] rounded-full py-2 lg:py-3 px-4 lg:px-6  text-lg text-black font-bold mt-2 lg:mt-4 inline-block"
                          >
                            TruckersMP Profil
                          </a>
                        </div>

                        {/* Right side of profile */}
                        <div>
                          {e.response.vtc.inVTC == true ? (
                            <div className="font-light text-xl">
                              <CurrentPlayerVtc vtcid={e.response.vtc.id} />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Player VTC History */}
                    <div className="bg-[#34465a] rounded-lg py-8 mt-8  ">
                      {e.response.displayVTCHistory == true ? (
                        <div className=" px-8 mb-8 ">
                          <h1 className="text-4xl mb-8">Experience</h1>
                          <div className="relative">
                            {e.response.vtcHistory.length > 0 ? (
                              e.response.vtcHistory.map((e) => {
                                return (
                                  <a href={`/vtc/${e.id}`}>
                                    <VtcExperience e={e} key={e.id} />
                                  </a>
                                );
                              })
                            ) : (
                              <div>
                                <h1>No Experience</h1>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                );
              })
            : "no data"}
        </div>

        {/*
        Suggested profiles section
        */}
        <div className="mt-8 lg:mt-0">
          <div className="bg-[#34465a] p-8 rounded-lg ">
            <h1 className="font-bold text-3xl">You may also know</h1>
            <div className="">
              {(() => {
                function randomIntFromInterval(min, max) {
                  return Math.floor(Math.random() * (max - min + 1) + min);
                }

                const nb = randomIntFromInterval(1, 5354137);
                const elements = [];

                for (let index = nb - 5; index < nb; index++) {
                  // We push SuggestedProfiles component into an array ( elements[] ) and then we ' render ' the array elements
                  elements.push(<SuggestedProfiles pid={index} />);
                }
                return elements;
              })()}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-96 font-bold uppercase text-4xl">
        <h1>User not found</h1>
      </div>
    );
  }
}

export default Player;
