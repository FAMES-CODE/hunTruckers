import React, { useEffect, useState } from "react";
const baseURL = process.env.serverBaseURL;

function CurrentPlayerVtc({ vtcid }) {
  const [vtcData, setvtcData] = useState([]);

  useEffect(() => {
    let data = fetch(baseURL + "/vtc/" + vtcid)
      .then((response) => response.json())
      .then((data) => setvtcData(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (vtcData.length > 0) {
    return vtcData.map((currentVtc) => {
      return (
        <div>
          <a
            className="flex flex-col text-center lg:flex-row items-center justify-center  gap-2"
            href={`../vtc/` + currentVtc.response.id}
          >
            <img
              src={currentVtc.response.logo}
              alt=""
              className="w-14 lg:w-16"
            />
            <h1>{currentVtc.response.name}</h1>
          </a>
        </div>
      );
    });
  }
}

export default CurrentPlayerVtc;
