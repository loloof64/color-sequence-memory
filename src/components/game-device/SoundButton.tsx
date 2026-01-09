import "./SoundButton.css";

interface SoundButtonParams {
  color: string;
  radiusX: "left" | "right";
  radiusY: "top" | "bottom";
}

function SoundButton({ color, radiusX, radiusY }: SoundButtonParams) {
  // Compute all four corner radii for quarter-circle effect
  const borderTopLeftRadius =
    radiusX === "left" && radiusY === "top" ? "100%" : "0";
  const borderTopRightRadius =
    radiusX === "right" && radiusY === "top" ? "100%" : "0";
  const borderBottomLeftRadius =
    radiusX === "left" && radiusY === "bottom" ? "100%" : "0";
  const borderBottomRightRadius =
    radiusX === "right" && radiusY === "bottom" ? "100%" : "0";

  return (
    <div
      className="soundButton"
      style={{
        backgroundColor: color,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
      }}
    ></div>
  );
}

export default SoundButton;
