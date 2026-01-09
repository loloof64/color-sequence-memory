import "./GameDevice.css";
import MiddleButton from "./MiddleButton";
import SoundButton from "./SoundButton";

function GameDevice() {
  return (
    <div className="gameDevice">
      <SoundButton
        color="blue"
        radiusX="left"
        radiusY="top"
        beepFrequency={200}
      />
      <SoundButton
        color="red"
        radiusX="right"
        radiusY="top"
        beepFrequency={300}
      />
      <SoundButton
        color="yellow"
        radiusX="left"
        radiusY="bottom"
        beepFrequency={400}
      />
      <SoundButton
        color="green"
        radiusX="right"
        radiusY="bottom"
        beepFrequency={500}
      />
      <MiddleButton />
    </div>
  );
}

export default GameDevice;
