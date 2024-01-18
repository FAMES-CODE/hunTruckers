import React, { useState, useEffect } from "react";
const baseUrl = process.env.serverBaseURL;
function VtcMember({ VtcId }) {
  const [membersdata, setmembersdata] = useState([]);
  useEffect(() => {
    let data = fetch(baseUrl + "/vtc/members/" + VtcId)
      .then((response) => response.json())
      .then((data) => setmembersdata(data.data.response.members))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (membersdata) {
    return (
      <div className="w-full grid grid-cols-3 gap-10 px-5 ">
        {membersdata.map((member) => {
          return (
            <div className="flex flex-col text-left border-l-2 pl-5">
              <a href={`../players/` + member.user_id}>
                <h1 className="text-xl  font-bold">{member.username}</h1>
                <h1 className="text-sm italic">
                  Member since : {member.joinDate.split(" ", 1)}
                </h1>
                <h1
                  className={
                    "text-sm italic " + (member.is_owner ? "text-red-600" : "")
                  }
                >
                  {member.role}{" "}
                </h1>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default VtcMember;
