import React from "react";

function Index() {
  return (
    <div className="h-96 flex justify-center items-center">
      <div className="flex-col">
        <div>
          <h1>Search for player</h1>
          <input type="text" className="rounded w-96 h-8 text-black"/>
        </div>
        <div>
          <h1>Enter a TruckersMP ID</h1>
        </div>
      </div>
    </div>
  );
}

export default Index;
