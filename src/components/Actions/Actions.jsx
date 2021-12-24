import { Link } from "react-router-dom";
import { ActionButton } from "./ActionButton";
import { TimerActions } from "./Timeractions";

export const Actions = () => {
  return (
    <div className="actions__container">
      <TimerActions />
      <ActionButton name="start">Start</ActionButton>
      <ActionButton name="reset">Reset</ActionButton>
      {/* <ActionButton name="camera" noModal>
        <i className="bi bi-camera-video"></i>
      </ActionButton>
       */}
      <button
        className={`actions__btn actions__btn--camera`}
        onClick={() => window.open('/Cameras')}
      >
        <i className="bi bi-camera-video"></i>
      </button>
      <Link to="/light" className="actions__btn actions__btn--light">
        <i className="bi bi-lamp"></i>
      </Link>
    </div>
  );
};
