import Lottie from "lottie-react";
import RobotNotFound from "../../assets/lottie-files/robot-not-found.json";
export default function NotFound() {
  return (
    <div className="notfound">
      <Lottie
        animationData={RobotNotFound}
        style={{ height: "25vh" }}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
