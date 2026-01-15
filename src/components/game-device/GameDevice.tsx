import { useState } from "react";
import beep from "../../core/beep";
import "./GameDevice.css";
import MiddleButton from "./MiddleButton";
import SoundButton, { ButtonColor } from "./SoundButton";

const soundFrequencies: Array<number> = [200, 300, 400, 500];
const SOUND_DURATION_MS = 300;

function GameDevice() {
  const [activeSound, setActiveSound] = useState<ButtonColor | null>(null);
  const playColorSound = (color: ButtonColor) => {
    setActiveSound(color);
    beep(soundFrequencies[color], SOUND_DURATION_MS);

    setTimeout(() => setActiveSound(null), SOUND_DURATION_MS);
  };

  return (
    <div className="gameDevice">
      <SoundButton
        color={ButtonColor.blue}
        radiusX="left"
        radiusY="top"
        active={activeSound === ButtonColor.blue}
        playSound={() => playColorSound(ButtonColor.blue)}
      />
      <SoundButton
        color={ButtonColor.red}
        radiusX="right"
        radiusY="top"
        active={activeSound === ButtonColor.red}
        playSound={() => playColorSound(ButtonColor.red)}
      />
      <SoundButton
        color={ButtonColor.yellow}
        radiusX="left"
        radiusY="bottom"
        active={activeSound === ButtonColor.yellow}
        playSound={() => playColorSound(ButtonColor.yellow)}
      />
      <SoundButton
        color={ButtonColor.green}
        radiusX="right"
        radiusY="bottom"
        active={activeSound === ButtonColor.green}
        playSound={() => playColorSound(ButtonColor.green)}
      />
      <MiddleButton />
    </div>
  );
}

export default GameDevice;
