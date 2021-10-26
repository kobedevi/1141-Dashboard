import { ActionButton } from "./ActionButton";

export const Actions = () => {
  return (
    <div class="actions__container">
      <ActionButton name="start">Start</ActionButton>
      <ActionButton name="pause">Pause</ActionButton>
      <ActionButton name="stop">Stop</ActionButton>
      <ActionButton name="reset">Reset</ActionButton>
      <ActionButton name="camera">
        <i class="bi bi-camera-video"></i>
      </ActionButton>
    </div>
  );
};
