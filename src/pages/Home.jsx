import { useState, useEffect } from "react";
import ServerStatusCard from "../components/ServerStatusCard";
import Navbar from "./../components/navbar";
import StreamerCard from "./../components/StreamerCard";
import Loading from "./../components/Loading";

const baseURL = process.env.serverBaseURL;
export default function Home() {
  const [data, setData] = useState([]);
  const [streamers, setStreamers] = useState([]);

  // Get servers status
  useEffect(() => {
    let data = fetch(baseURL + "/server")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Get live stream on ETS2 from twitch
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
  document.title = "Home";
  if (data.length > 0 && streamers.length > 0) {
    return (
      <div className=" text-white ">
        <div className="w-full h-full">
          <Navbar />

          {/* Main */}
          <div className="px-8 pt-8">
            {/* Server status section */}
            <h1 className="text-2xl font-bold lg:text-left text-center">
              Servers status
            </h1>
            <div className="sm:flex justify-between">
              {data.map((e, key) => {
                if (
                  (e.game == "ETS2" && e.shortname == "EU SIM 1") ||
                  (e.game == "ETS2" && e.shortname == "EU PM") ||
                  (e.game == "ATS" && e.shortname == "US SIM")
                ) {
                  return (
                    <div className="mt-4 sm:w-1/3" key={key}>
                      <ServerStatusCard props={e} />
                    </div>
                  );
                }
              })}
            </div>

            <div className="mt-16">
              {/* Twitch streamers section */}
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
                      className="flex justify-center items-center m-4 p-2 bg-[#34465a] rounded-xl shadow shadow-slate-500  hover:shadow-md hover:shadow-[#bf94f0]"
                      key={key}
                    >
                      <StreamerCard props={e} />
                    </div>
                  );
                })}
                <div className="flex justify-center items-center m-4 p-2  rounded-xl ">
                  <a
                    href="https://www.twitch.tv/directory/category/euro-truck-simulator-2"
                    target="_blank"
                    className="text-3xl"
                  >
                    See more on{" "}
                    <span className="text-[#bf94f0] italic">Twitch</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* */}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loading />
      </div>
    );
  }
}
