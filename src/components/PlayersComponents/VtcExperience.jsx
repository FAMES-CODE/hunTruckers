import React from "react";
import { useState, useEffect } from "react";
const baseURL = process.env.serverBaseURL;

function VtcExperience({ e }) {
  const [vtcData, setvtcData] = useState([]);

  useEffect(() => {
    let data = fetch(baseURL + "/vtc/" + e.id)
      .then((response) => response.json())
      .then((data) => setvtcData(data))
      .catch((e) => {
        console.error(e);
      });
  }, []);
  if (vtcData.length > 0) {
    return (
      <div
        className="px-2 py-8 mb-8 flex items-start gap-8 border-b-2 hover:bg-[#8ab8ed68] hover:rounded-t-xl"
        key={e.id}
      >
        {vtcData.map((vtc) => {
          return (
            <div className="w-24" key={vtc.id}>
              <img src={vtc.response.logo} alt="VTC Logo" />
            </div>
          );
        })}
        <div className="w-full">
          <div className="flex items-center gap-2 ">
            <h1 className="text-3xl">{e.name}</h1>
            {vtcData.map((vtc) => {
              return (
                <div key={vtc.id}>
                  <div className="flex items-center gap-2">
                    {vtc.response.verified ? <VerifiedLogo /> : ""}
                    {vtc.response.validated ? <ValidatedLogo /> : ""}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-[#97989a]">
            <h1>Left {e.leftDate.split("T", 1)}</h1>
            <h1>Join {e.joinDate.split(" ", 1)}</h1>
          </div>
        </div>
      </div>
    );
  }
}

function ValidatedLogo() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 448 512"
      >
        <title>Validated</title>
        <path
          fill="#1FF050"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
    </div>
  );
}
function VerifiedLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 512 512"
    >
      <title>Verified</title>
      <path
        fill="#005eff"
        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
      />
    </svg>
  );
}

export default VtcExperience;
