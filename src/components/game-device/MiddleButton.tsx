import "./MiddleButton.css";

interface MiddleGameButtonParams {
  startGame: () => void;
}

function MiddleButton({ startGame }: MiddleGameButtonParams) {
  return (
    <div className="middleButton" onClick={startGame}>
      Start
    </div>
  );
}

export default MiddleButton;
