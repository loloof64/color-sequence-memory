import { useState } from "react";
import beep from "../../core/beep";
import "./GameDevice.css";
import MiddleButton from "./MiddleButton";
import SoundButton, { ButtonColor } from "./SoundButton";
import { sleepForTimeMs } from "../../core/utils";

const soundFrequencies: Array<number> = [200, 300, 400, 500];
const SOUND_DURATION_MS = 300;
const GAME_LOST_FREQUENCY = 100;
const GAME_LOST_DURATION_MS = 800;
const SEQUENCE_GAP_MS = 50;
const NEXT_SEQUENCE_GAP_MS = 100;

function GameDevice() {
  const [activeSound, setActiveSound] = useState<ButtonColor | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const [checkIndex, setCheckIndex] = useState(0);
  const [sequence, setSequence] = useState<Array<ButtonColor>>([]);

  const playColorSound = async (color: ButtonColor) => {
    setActiveSound(color);
    await beep(soundFrequencies[color], SOUND_DURATION_MS);
    setActiveSound(null);
  };

  const addColorToSequence = async () => {
    setIsInteractive(false);
    setCheckIndex(0);
    const nextColor = Math.floor(Math.random() * 4) as ButtonColor;
    setSequence((previous) => {
      const updated = [...previous, nextColor];
      playSequence(updated);
      return updated;
    });
    setIsInteractive(true);
  };

  const advanceToNextSequenceColor = () => {
    setCheckIndex((current) => current + 1);
  };

  const checkCurrentColor = async (color: ButtonColor) => {
    if (!isInProgress) return;
    if (!isInteractive) return;
    const isExpected = color === sequence[checkIndex];

    if (isExpected) {
      const wasLastColor = checkIndex >= sequence.length - 1;
      if (wasLastColor) {
        await sleepForTimeMs(NEXT_SEQUENCE_GAP_MS);
        await addColorToSequence();
      } else {
        advanceToNextSequenceColor();
      }
    } else {
      setIsInteractive(false);
      await beep(GAME_LOST_FREQUENCY, GAME_LOST_DURATION_MS);
      setIsInProgress(false);
    }
  };

  const handleColorSelected = async (color: ButtonColor) => {
    if (!isInProgress) return;
    if (!isInteractive) return;
    await playColorSound(color);
    await checkCurrentColor(color);
  };

  const playSequence = async (sequence: Array<ButtonColor>) => {
    for (const sound of sequence) {
      await playColorSound(sound);
      await sleepForTimeMs(SEQUENCE_GAP_MS);
    }
    setIsInteractive(true);
  };

  const handleStartGame = async () => {
    if (isInProgress) return;
    setSequence([]);
    setIsInProgress(true);
    await addColorToSequence();
  };

  return (
    <div className="gameDevice">
      <SoundButton
        color={ButtonColor.blue}
        radiusX="left"
        radiusY="top"
        active={activeSound === ButtonColor.blue}
        playSound={() => handleColorSelected(ButtonColor.blue)}
      />
      <SoundButton
        color={ButtonColor.red}
        radiusX="right"
        radiusY="top"
        active={activeSound === ButtonColor.red}
        playSound={() => handleColorSelected(ButtonColor.red)}
      />
      <SoundButton
        color={ButtonColor.yellow}
        radiusX="left"
        radiusY="bottom"
        active={activeSound === ButtonColor.yellow}
        playSound={() => handleColorSelected(ButtonColor.yellow)}
      />
      <SoundButton
        color={ButtonColor.green}
        radiusX="right"
        radiusY="bottom"
        active={activeSound === ButtonColor.green}
        playSound={() => handleColorSelected(ButtonColor.green)}
      />
      <MiddleButton startGame={handleStartGame} />
    </div>
  );
}

export default GameDevice;
