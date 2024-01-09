import React from "react";

function PlayerPermission({props}) {
   
  return (
    <div>
      <h3 className=" uppercase bg-black/30 px-8 text-[#71b7fb] rounded-full p-3 text-md">
      {props}
      </h3>
    </div>
  );
}

export default PlayerPermission;
