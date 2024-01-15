import React from "react";
import { Link } from "react-router-dom";

function RecentVtc({ props }) {

  return (
    <Link
      to={`/vtc/${props.id}`}
      style={{
        backgroundImage: "url(https://api.truckersmp.com/assets/img/bg/25.jpg)",
      }}
      className="bg-cover bg-no-repeat h-full rounded-lg "
    >
      <div className="px-8">
        <div className=" my-6 ">
          <div className="flex items-center gap-5 font-bold">
            <h1 className="font-bold text-3xl">{props.name} | </h1>
            <h1 className="">{props.tag}</h1>
          </div>
          <h1 className="italic mt-2">{props.slogan}</h1>
        </div>

        <hr />

        <div className="flex justify-between my-4">
          <div>
            <h1>VTC language : {props.language} </h1>
            <h1>Members : {props.members_count}</h1>
          </div>

          <div>
            <h1>Owned by : {props.owner_username} </h1>
            <h1>Recruitment : {props.recruitment}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecentVtc;
