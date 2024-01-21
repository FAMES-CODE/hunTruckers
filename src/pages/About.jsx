import React from "react";
import Loading from "./../components/Loading";
import Navbar from "./../components/navbar";

function About() {
  React.useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div className="text-white  lg:overflow-hidden">
      <Navbar />
    
        <div className=" flex flex-col justify-center lg:items-center w-full sm:h-screen bg-[#2d3e4e] ">
          <h1 className="lg:text-4xl text-2xl font-bold text-center">
            About this project
          </h1>
          <p className="lg:text-xl text-lg lg:w-2/4 px-8 mt-8">
            Welcome to hunTruckers, a simple yet powerful tool designed for
            trucking enthusiasts within the TruckersMP community. Our mini app
            focuses on providing easy access to player profiles and Virtual
            Trucking Company (VTC) information, enhancing your experience in the
            virtual trucking world.
          </p>
          <h1 className="lg:text-4xl text-2xl font-bold text-center lg:mt-8">
            Features
          </h1>
          <h2 className="lg:text-2xl text-xl font-bold lg:mt-8 mt-2 px-2 text-left">
            Player Profiles
          </h2>
          <p className="lg:text-xl text-lg lg:w-2/4 px-8 mt-4 ">
            Discover detailed information about TruckersMP players. hunTruckers
            provides a quick overview of your fellow virtual truckers.
          </p>
          <h2 className="lg:text-2xl text-xl font-bold lg:mt-8 mt-2 px-2 text-left">
            VTC Directory
          </h2>
          <p className="lg:text-xl text-lg lg:w-2/4 px-8 mt-4 ">
            Explore Virtual Trucking Companies and their members effortlessly.
            Find the right VTC that suits your preferences and connect with
            other players who share your passion.
          </p>
          <h2 className="lg:text-2xl text-xl font-bold lg:mt-8 mt-2 px-2 text-left">
            Our Mission
          </h2>
          <p className="lg:text-xl text-lg lg:w-2/4 px-8 mt-4 ">
            Our mission at hunTruckers is to create a user-friendly space for
            TruckersMP enthusiasts. We believe in the simplicity of accessing
            player data and VTC information, fostering a sense of community
            among virtual truckers.
          </p>
        </div>
 
    </div>
  );
}

export default About;
