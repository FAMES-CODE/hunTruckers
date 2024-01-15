import React, { useEffect, useState } from "react";
import GetonePlayerInfo from "../../api/player";

function SuggestedProfiles({ pid }) {
  const [playerdata, setplayerdata] = useState([]);

  useEffect(() => {
    GetonePlayerInfo(pid, setplayerdata);
  }, []);
  if (playerdata.length > 0 && Array.isArray(playerdata)) {
    return (
      <div>
        {playerdata.map((e) => {
          console.log(e);
          return (
            <div className="hover:bg-[#5b7a9e69] rounded-lg p-2">
              <a href={`../Players/` + e.response.id}>
                <div className="flex items-center gap-2 my-6">
                  <img
                    src={e.response.avatar}
                    alt="pp"
                    className="w-1/4 border-2 rounded-full"
                  />
                  <div>
                    <h1 className="font-bold text-2xl">{e.response.name}</h1>
                    <h1 className="font-bold text-md">
                      {e.response.vtc.name ? e.response.vtc.name : ""}
                    </h1>
                  </div>
                </div>
              </a>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SuggestedProfiles;
