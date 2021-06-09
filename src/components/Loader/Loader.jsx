import React from "react";
import Lottie from "lottie-react";
import Skeleton from "../../assets/lottie-files/skeleton.json";
export default function Loader({ height }) {
  return (
    <div>
      <Lottie
        animationData={Skeleton}
        style={{ height: height || "25vh" }}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
