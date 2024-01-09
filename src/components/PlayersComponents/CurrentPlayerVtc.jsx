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
        <div className="flex items-center gap-2">
          <img src={currentVtc.response.logo} alt="" className="w-16" />
          <h1>
            {currentVtc.response.name}
          </h1>
        </div>
      );
    });
  }
}

export default CurrentPlayerVtc;
