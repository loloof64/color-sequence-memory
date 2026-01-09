import { useState } from "react";
import "./SoundButton.css";
import classNames from "classnames";
import beep from "../../core/beep";

const DELAY_FOR_INACTIVITY_MS = 300;

interface SoundButtonParams {
  color: string;
  radiusX: "left" | "right";
  radiusY: "top" | "bottom";
  beepFrequency: number;
}

function SoundButton({
  color,
  radiusX,
  radiusY,
  beepFrequency,
}: SoundButtonParams) {
  const [active, setActive] = useState(false);

  // Compute all four corner radii for quarter-circle effect
  const borderTopLeftRadius =
    radiusX === "left" && radiusY === "top" ? "100%" : "0";
  const borderTopRightRadius =
    radiusX === "right" && radiusY === "top" ? "100%" : "0";
  const borderBottomLeftRadius =
    radiusX === "left" && radiusY === "bottom" ? "100%" : "0";
  const borderBottomRightRadius =
    radiusX === "right" && radiusY === "bottom" ? "100%" : "0";

  const soundButtonClass = classNames({
    soundButton: true,
    active,
  });

  function handlePress() {
    setActive(true);
    beep(beepFrequency, DELAY_FOR_INACTIVITY_MS);

    setTimeout(() => setActive(false), DELAY_FOR_INACTIVITY_MS);
  }

  return (
    <div
      className={soundButtonClass}
      style={{
        backgroundColor: color,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
      }}
      onClick={() => handlePress()}
      onTouchStart={() => handlePress()}
    ></div>
  );
}

export default SoundButton;
