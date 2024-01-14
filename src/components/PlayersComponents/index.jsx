import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import RandomUser from "./RandomUser";

function Index() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const submitForm = (e) => {
    e.preventDefault();
    navigate(inputRef.current.value);
  };
  return (
    <div className="h-full lg:flex justify-around items-start">
      <div className="bg-[#34465a] p-8 lg:w-2/4 rounded-lg">
        <h1 className="text-3xl font-bold">Enter a player TruckersMP ID :</h1>
        <form onSubmit={(e) => submitForm(e)}>
          <input
            className="text-black rounded-md p-2 mt-4"
            type="number"
            placeholder="Enter a player ID"
            ref={inputRef}
          />
        </form>
        <div className="italic font-medium text-xl mt-2">
          <h1>You can enter</h1>

          <ul>
            <li>- TruckersMP ID</li>
            <li>- Steam ID ( NOT SteamID64 )</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#34465a] mt-8 lg:mt-0 p-8 lg:w-2/5 rounded-lg">
        <h1 className="font-bold text-4xl">Random users</h1>

        <div className="grid grid-cols-2 lg:grid-cols-3">
          {/* Function to get random number between X and Y 
          The function is set between 1 and 5354137, 
          because there is approximately 5354137 registred user on TruckersMP
          Basically we get random user data by ID , and the ID is generated by this function
          */}
          {(() => {
            function randomIntFromInterval(min, max) {
              return Math.floor(Math.random() * (max - min + 1) + min);
            }

            const nb = randomIntFromInterval(1, 5354137);
            const elements = [];

            for (let index = nb - 9; index < nb; index++) {
              // We push RandomUser component into an array ( elements[] ) and then we ' render ' the array elements
              elements.push(<RandomUser key={index} pid={index} />);
            }
            return elements;
          })()}
        </div>
      </div>
    </div>
  );
}

export default Index;
