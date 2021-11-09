import { ActionButton } from "./ActionButton";

export const Actions = () => {
  return (
    <div className="actions__container">
      <ActionButton name="start">Start</ActionButton>
      {/* Insert timer actions here */}
      <ActionButton name="pause" noModal>
        TODO - timerActions
      </ActionButton>
      {/* ^^^ Insert timer actions here ^^^ */}
      <ActionButton name="reset">Reset</ActionButton>
      <ActionButton name="camera" noModal>
        <i className="bi bi-camera-video"></i>
      </ActionButton>
    </div>
  );
};
