import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const [playerid, setplayerid] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    navigate(playerid);
  };
  return (
    <div className="flex justify-center items-center bg-cover">
      <div className="flex-col">
        <div>
          <h1 className="text-xl mb-3">Search for player</h1>
          <form onSubmit={submitForm}>
            <input
              type="text"
              className="rounded w-96 h-8 text-black"
              onChange={(e) => {
                setplayerid(e.target.value);
              }}
            />
          </form>
        </div>
        <div>
          <h1 className="font-thin italic border-transparent mt-1">
            Enter a TruckersMP ID
          </h1>
          <h1 className="fixed left-0 top-0">
     
            
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Index;
