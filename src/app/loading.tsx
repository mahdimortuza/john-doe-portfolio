"use client";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading-animation/loading.json";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-[300px] h-[200px]"
      />
    </div>
  );
};

export default Loader;
