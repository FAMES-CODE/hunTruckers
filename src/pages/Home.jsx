import { useState, useEffect } from "react";
import Card from "../components/Card";
import Navbar from "./../components/navbar";
import StreamerCard from "./../components/StreamerCard";

export default function Home() {
  const [data, setData] = useState([]);
  const [streamers, setStreamers] = useState([]);

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

  useEffect(() => {
    let data = fetch("https://api.truckyapp.com/v2/streams/twitch/ets2")
      .then((response) => response.json())
      .then((data) => {
        setStreamers(data.response.streams);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (data.length > 0 && streamers.length > 0) {
    return (
      <div className="flex text-white ">
        <div className=" bg-[#2d3e4e] w-full h-full">
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
          <div className="px-8 pt-8">
            <div className="sm:flex justify-between">
              {data.map((e, key) => {
                if (
                  (e.game == "ETS2" && e.shortname == "EU SIM 1") ||
                  (e.game == "ETS2" && e.shortname == "EU PM") ||
                  (e.game == "ATS" && e.shortname == "US SIM")
                ) {
                  return (
                    <div className="mt-4 sm:w-1/3" key={key}>
                      <Card
                        servername={`${e.shortname} | ${e.name} (${e.game})`}
                        state={`${e.online}`}
                        players={`${e.players}`}
                        maxplayers={`${e.maxplayers}`}
                      />
                    </div>
                  );
                }
              })}
            </div>

            <div className="flex-col mt-16">
              <div>
                <h1 className="font-bold text-2xl">
                  Streamers playing ETS2 on{" "}
                  <span className="text-[#bf94f0] italic">TWITCH</span>
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 ">
                {streamers.slice(0, 8).map((e, key) => {
                  return (
                    <div
                      className="flex justify-center items-center m-4"
                      key={key}
                    >
                      <StreamerCard
                        link={e.url}
                        title={
                          e.title.length > 45
                            ? e.title.slice(0, 45) + "..."
                            : e.title
                        }
                        streamername={e.userDisplayName}
                        viewers={e.viewers}
                        profileimage={e.user.profile_image_url}
                        thumbnail={e.thumbnailUrl
                          .replace("{width}", "1280")
                          .replace("{height}", "720")}
                      />
                    </div>
                  );
                })}
               
              </div>
            </div>
          </div>

          {/* */}
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
