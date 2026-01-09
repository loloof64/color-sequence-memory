import "./GameDevice.css";
import MiddleButton from "./MiddleButton";
import SoundButton from "./SoundButton";

function GameDevice() {
  return (
    <div className="gameDevice">
      <SoundButton color="blue" radiusX="left" radiusY="top" />
      <SoundButton color="red" radiusX="right" radiusY="top" />
      <SoundButton color="yellow" radiusX="left" radiusY="bottom" />
      <SoundButton color="green" radiusX="right" radiusY="bottom" />
      <MiddleButton />
    </div>
  );
}

export default GameDevice;
