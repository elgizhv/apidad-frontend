import React from "react";
import Lottie from "lottie-react";
import RobotLoading from "../../assets/lottie-files/robot-loading.json";

export default function SplashScreen() {
  return (
    <div className="splash">
      <Lottie
        animationData={RobotLoading}
        style={{ height: "20vh" }}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
