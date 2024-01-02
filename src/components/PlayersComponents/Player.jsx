import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Player() {
  var pid = useParams().pid;
  const [pdata, setpdata] = useState([]);

  useEffect(() => {
    let data = fetch("http://127.0.0.1:8888/player/get/" + pid)
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
                  <div key={key} className="grid grid-cols-2 px-24">
                    <div>
                      <img src={e.response.avatar} alt="" />
                    </div>
                    <div>
                      <div>
                        <h1> -- General informations -- </h1>
                        <h1>TruckersMP ID : {e.response.id}</h1>
                        <h1>Name : {e.response.name}</h1>
                      </div>
                      {e.response.displayBans == true ? (
                        <div>
                          <h1> -- Ban Info -- </h1>
                          <h1>Banned : {JSON.stringify(e.response.banned)} </h1>
                          <h1>
                            bans Count : {JSON.stringify(e.response.bansCount)}{" "}
                          </h1>
                        </div>
                      ) : (
                        "d"
                      )}

                      {e.response.patreon.hidden == false ? (
                        <div>
                          <h1> -- Patreon informations -- </h1>
                          <h1>
                            Is Patreon :{" "}
                            {JSON.stringify(e.response.patreon.isPatron)}
                          </h1>
                          <h1>
                            Is Patreon active :{" "}
                            {JSON.stringify(e.response.patreon.active)}
                          </h1>
                        </div>
                      ) : (
                        <div> </div>
                      )}

                      <div>
                        <h1> -- Permission informations -- </h1>
                        <h1>
                          Is game admin :{" "}
                          {JSON.stringify(e.response.permissions.isGameAdmin)}
                        </h1>
                        <h1>
                          Is management :{" "}
                          {JSON.stringify(e.response.permissions.isManagement)}
                        </h1>
                        <h1>
                          Is staff :{" "}
                          {JSON.stringify(e.response.permissions.isStaff)}
                        </h1>
                      </div>
                    </div>
                    <div className="w-96">VTC DATA</div>
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
