import React, { useState, useEffect } from "react";
import GetonePlayerInfo from "../../api/player";

function RandomUser({ pid }) {
  const [pdata, setpdata] = useState([]);

  useEffect(() => {
    GetonePlayerInfo(pid, setpdata);
  }, []);

  if (pdata.length > 0) {
    return (
      <div>
        {pdata.map((e) => {
          return (
            <div className="lg:flex p-8">
              <a href={`/players/${e.response.id}`}>
                <img
                  src={e.response.avatar}
                  alt="Player avatar"
                  className=" lg:w-1/2 border-2 rounded-xl"
                />
                <h1>{e.response.name}</h1>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RandomUser;
