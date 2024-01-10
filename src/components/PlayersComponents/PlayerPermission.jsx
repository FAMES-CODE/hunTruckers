import React from "react";

function PlayerPermission({ props }) {
  return (
    <div className="uppercase bg-black/30  lg:px-8 text-[#71b7fb] rounded-full py-3 text-sm lg:text-md mb-2 lg:mb-0">
      <h3 className="text-center">{props}</h3>
    </div>
  );
}

export default PlayerPermission;
