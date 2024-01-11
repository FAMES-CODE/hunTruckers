import React from "react";
import { useParams } from "react-router-dom";
function VtcPage() {
  const vtcid = useParams().vtcid;
  console.log(vtcid);
  return (
    <div>
      <div>
        <h1>VTC NAME</h1>
      </div>
    </div>
  );
}

export default VtcPage;
