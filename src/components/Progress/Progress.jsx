import { PlayerToggle } from "./PlayerToggle";
import { ProgressBar } from "./ProgressBar";
import { Timer } from "./Timer";

export const Progress = () => {
  return (
    <div className="progress__container">
      <Timer />
      <ProgressBar />
      <PlayerToggle />
    </div>
  );
};
