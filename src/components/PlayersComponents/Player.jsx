import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const baseURL = process.env.serverBaseURL;
function Player() {
  var pid = useParams().pid;
  const [pdata, setpdata] = useState([]);

  useEffect(() => {
    let data = fetch(baseURL + "/player/get/" + pid)
      .then((response) => response.json())
      .then((data) => setpdata(data))
      .catch((e) => {
        console.error(e);
      });
  }, []);
  if (pdata) {
    return (
      <div className="flex-col">
        <div>
          {pdata
            ? pdata.map((e, key) => {
                console.log(e);

                return (
                  <div key={key} className="flex-col px-24 w-[70vw] ">
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
                          <div className="mt-2 flex items-center text-base gap-4 w-full">
                            <h3 className="font-bold text-red-600 uppercase bg-black/20 rounded-md px-8">
                              {e.response.permissions.isStaff ? "Staff" : ""}
                            </h3>
                            <h3 className="font-bold text-red-600 uppercase bg-black/20 rounded-md px-8">
                              {e.response.permissions.isManagement
                                ? "Management"
                                : ""}
                            </h3>
                            <h3 className="font-bold text-red-600 uppercase bg-black/20 rounded-md px-8">
                              {e.response.permissions.isGameAdmin
                                ? "Game Admin"
                                : ""}
                            </h3>
                          </div>
                          <h3 className="mt-2 font-thinc text-base text-[#8e8f92]">
                            Member since : {e.response.joinDate.split(" ", 1)}
                          </h3>
                        </div>
                        <div>
                          {e.response.vtc.inVTC == true ? (
                            <h1 className="font-light text-3xl">
                              {e.response.vtc.name}{" "}
                            </h1>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#34465a] rounded-lg py-8 mt-8 ">
                      {e.response.displayVTCHistory == true ? (
                        <div className=" px-8 ">
                          <h1 className="text-4xl">Experience</h1>
                          <div className="relative">
                            {e.response.vtcHistory.map((e) => {
                              return (
                                <div className=" py-2 flex items-start gap-8">
                                  <div>IMG</div>
                                  <div className="">
                                    <h1 className="text-3xl">{e.name}</h1>
                                    <div className="text-[#97989a]">
                                    <h1>Left {e.leftDate.split("T", 1)}</h1>
                                    <h1>Join {e.joinDate.split(" ", 1)}</h1>
                                    </div>
                                      
                                    <hr className="absolute w-[90%]" />
                                  </div>
                                </div>
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
