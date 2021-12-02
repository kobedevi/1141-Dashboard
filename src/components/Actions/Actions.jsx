import { ActionButton } from "./ActionButton";
import { TimerActions } from "./Timeractions";

export const Actions = () => {
  return (
    <div className="actions__container">
      <TimerActions />
      <ActionButton name="start">Start</ActionButton>
      <ActionButton name="reset">Reset</ActionButton>
      <ActionButton name="camera" noModal>
        <i className="bi bi-camera-video"></i>
      </ActionButton>
    </div>
  );
};
