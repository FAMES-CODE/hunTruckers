import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Playerapi from "./../../api/player";
import VtcExperience from "./VtcExperience";
import CurrentPlayerVtc from "./CurrentPlayerVtc";
import PlayerPermission from './PlayerPermission';

function Player() {
  var pid = useParams().pid;
  const [pdata, setpdata] = useState([]);

  useEffect(() => {
    Playerapi(pid, setpdata);
  }, []);

  if (pdata) {
    return (
      <div className="flex-col">
        <div>
          {pdata
            ? pdata.map((e) => {
                return (
                  <div key={e.response.id} className="flex-col px-24 w-[70vw] ">
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
                          className="relative rounded-full w-1/4 border-4 border-[#34465a] top-20 "
                        />
                      </div>

                      <div className="flex justify-between text-4xl mt-12 px-8 p-6">
                        <div className="">
                          <h1 className="mt-2 font-bold ">{e.response.name}</h1>
                          <h2
                            className={`mt-2 font-medium text-2xl italic text-[${e.response.groupColor}]`}
                          >
                            {e.response.groupName}
                          </h2>
                          <h3 className="mt-2 font-thinc text-xl text-[#8e8f92]">
                            Member since : {e.response.joinDate.split(" ", 1)}
                          </h3>

                          <div className="mt-2 flex items-center text-base gap-4 w-full">
                            
                            {e.response.permissions.isStaff ?  <PlayerPermission props="Staff" />  : ""}
                            {e.response.permissions.isManagement ? <PlayerPermission props="Management" /> : ""}
                            {e.response.permissions.isGameAdmin ? <PlayerPermission props="Game Admin" /> : ""}
                
                          </div>
                         
                          <a href={`https://truckersmp.com/user/` + e.response.id} className="bg-[#71b7fb] rounded-full p-3 text-lg text-black font-bold mt-4 inline-block">TruckersMP Profil</a>
                        </div>
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
                    <div className="bg-[#34465a] rounded-lg py-8 mt-8 ">
                      {e.response.displayVTCHistory == true ? (
                        <div className=" px-8 ">
                          <h1 className="text-4xl mb-8">Experience</h1>
                          <div className="relative">
                            {e.response.vtcHistory.map((e) => {
                              return (
                                <a href={`/vtc/${e.id}`}>
                                  <VtcExperience e={e} key={e.id} />
                                </a>
                              );
                            })}
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
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default Player;
