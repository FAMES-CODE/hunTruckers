import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecentVtc from "./RecentVtc";
import Loading from './../Loading';
const baseURL = process.env.serverBaseURL;

function Index() {
  const navigate = useNavigate();
  const vtcRef = useRef();
  const [vtcs, setvtcs] = useState([]);
  useEffect(() => {
    let data = fetch(baseURL + "/vtc/")
      .then((response) => response.json())
      .then((data) => setvtcs(data.data.response.recent))
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    navigate(vtcRef.current.value);
  };
  document.title = "VTC";
  if (vtcs.length > 0) {
    return (
      <div className="">
        <div className="flex justify-center items-center gap-10 bg-[#34465a] p-8 mt-8  rounded-lg">
          <h1 className="text-3xl font-bold">Enter a VTC ID : </h1>
          <form onSubmit={(e) => submitForm(e)} className="w-3/6">
            <input
              className="text-black rounded-md p-2 w-full"
              type="number"
              placeholder="VTC ID"
              ref={vtcRef}
            />
          </form>
        </div>
        <h1 className="text-center text-4xl font-bold my-16">Recent VTC</h1>
        <div className="bg-[#34465a] mt-8 lg:mt-0 p-8 lg:w-full rounded-lg">
          <div className="grid grid-cols-1  gap-10 justify-around ">
            {vtcs.length > 0 ? vtcs.map((e) => {
              return <RecentVtc props={e} />;
            }) : <div className=""><h1>Loading . . . </h1></div>}
          </div>
        </div>
      </div>
    );
  } 
}

export default Index;
