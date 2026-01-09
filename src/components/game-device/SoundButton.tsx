import { useState } from "react";
import "./SoundButton.css";
import classNames from "classnames";

interface SoundButtonParams {
  color: string;
  radiusX: "left" | "right";
  radiusY: "top" | "bottom";
}

function SoundButton({ color, radiusX, radiusY }: SoundButtonParams) {
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
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    ></div>
  );
}

export default SoundButton;
