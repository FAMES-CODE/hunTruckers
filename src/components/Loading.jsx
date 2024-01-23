import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Loading() {
  return (
    <div className="z-30 flex justify-center items-center w-screen h-screen">
      <h1 className=" text-white font-bold text-4xl uppercase">
        Loading . . .
      </h1>
    </div>
  );
}

export default Loading;
