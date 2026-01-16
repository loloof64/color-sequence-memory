import { useTranslation } from "react-i18next";
import "./MiddleButton.css";

interface MiddleGameButtonParams {
  startGame: () => void;
}

function MiddleButton({ startGame }: MiddleGameButtonParams) {
  const { t } = useTranslation();
  return (
    <div className="middleButton" onClick={startGame}>
      {t("start")}
    </div>
  );
}

export default MiddleButton;
