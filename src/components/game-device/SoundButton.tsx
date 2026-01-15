import "./SoundButton.css";
import classNames from "classnames";

export enum ButtonColor {
  blue,
  red,
  yellow,
  green,
}

interface SoundButtonParams {
  color: ButtonColor;
  radiusX: "left" | "right";
  radiusY: "top" | "bottom";
  active: boolean;
  playSound: () => void;
}

function SoundButton({
  color,
  radiusX,
  radiusY,
  active,
  playSound,
}: SoundButtonParams) {
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

  const bgColor = Object(ButtonColor)[color];

  return (
    <div
      className={soundButtonClass}
      style={{
        backgroundColor: bgColor,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
      }}
      onClick={playSound}
      onTouchStart={playSound}
    ></div>
  );
}

export default SoundButton;
