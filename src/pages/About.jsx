import React from "react";
import Loading from "./../components/Loading";
import Navbar from "./../components/navbar";

function About() {
  React.useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div>
      <Navbar />

      <div className="text-white flex flex-col justify-center items-center py-8">
        <h1 className="font-bold text-2xl lg:text-4xl mt-8">
          About this project
        </h1>
        <p className="w-3/4 lg:w-2/4 text-lg mt-4">
          Welcome to hunTruckers, a simple yet powerful tool designed for
          trucking enthusiasts within the TruckersMP community. Our mini app
          focuses on providing easy access to player profiles and Virtual
          Trucking Company (VTC) information, enhancing your experience in the
          virtual trucking world.
        </p>
        <h1 className="font-bold text-2xl lg:text-4xl mt-8">Our mission</h1>
        <p className="w-3/4 lg:w-2/4 text-lg mt-4">
          Our mission at hunTruckers is to create a user-friendly space for
          TruckersMP enthusiasts. We believe in the simplicity of accessing
          player data and VTC information, fostering a sense of community among
          virtual truckers.
        </p>
        <h1 className="font-bold text-2xl lg:text-4xl mt-8">Features</h1>
        <h2 className="font-bold text-xl mt-4">Players Profiles</h2>
        <p className="w-3/4 lg:w-2/4 text-lg">
          Discover detailed information about TruckersMP players. hunTruckers
          provides a quick overview of your fellow virtual truckers.
        </p>
        <h2 className="font-bold text-xl mt-4">VTC Directory</h2>
        <p className="w-3/4 lg:w-2/4 text-lg">
          Explore Virtual Trucking Companies and their members effortlessly.
          Find the right VTC that suits your preferences and connect with other
          players who share your passion.
        </p>
      </div>
    </div>
  );
}

export default About;
