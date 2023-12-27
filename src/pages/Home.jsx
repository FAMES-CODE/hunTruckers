import { useState, useEffect } from "react";
import Card from "../components/Card";
import Navbar from "./../components/navbar";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let data = fetch("http://127.0.0.1:8888/server")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (data.length > 0) {
    return (
      <div className="flex text-white ">
        <Navbar />
        <div className=" bg-[#2d3e4e] w-full h-screen">
          {/* TOP */}
          <div className="bg-[#34465a] h-36 font-bold border-b-2 border-slate-500">
            <div className="pl-8 pt-8 ">
              <h1 className="text-6xl">hunTrucker</h1>
              <h2 className="text-xl italic font-medium">
                A TruckerMP stats tracker
              </h2>
            </div>
          </div>
          {/* */}

          {/* Main */}
          <div className="flex justify-between pl-8 pt-8">
            {data.map((e, key) => {
              if ((e.game == "ETS2" && e.shortname == "EU SIM 1") || (e.game == "ETS2" && e.shortname == "EU PM") || (e.game == "ATS" && e.shortname == "US SIM")) {
                return (
                  <div className="w-1/3" key={key}>
                    <Card servername={`${e.game} | ${e.shortname} | ${e.name} `} state={`${e.online}`} players={`${e.players}`} maxplayers={`${e.maxplayers}`} />
                  </div>
                );
              }
            })}
          </div>
          {/* */}
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
