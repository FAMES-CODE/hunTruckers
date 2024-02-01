import React, { useState, useEffect } from "react";
const baseUrl = process.env.serverBaseURL;
function VtcMember({ VtcId }) {
  const [membersdata, setmembersdata] = useState([]);
  useEffect(() => {
    let data = fetch(baseUrl + "/vtc/members/" + VtcId)
      .then((response) => response.json())
      .then((data) => setmembersdata(data.data.response.members))
      .catch((err) => {
        console.err(err);
      });
  }, []);

  if (membersdata) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-8">VTC Members : {membersdata.length}</h1>
        <div className="w-full grid md:grid-cols-3 gap-4 px-5 ">
          {membersdata.map((member) => {
            return (
              <div className="flex flex-col text-left border-l-2">
                <a
                  href={`../players/` + member.user_id}
                  className="p-5 hover:bg-slate-500 rounded-r-lg"
                >
                  <h1 className="text-xl  font-bold">{member.username}</h1>
                  <h1 className="text-sm italic">
                    Member since : {member.joinDate.split(" ", 1)}
                  </h1>
                  <h1
                    className={
                      "text-sm italic " +
                      (member.is_owner ? "text-red-600" : "")
                    }
                  >
                    {member.role}{" "}
                  </h1>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default VtcMember;
