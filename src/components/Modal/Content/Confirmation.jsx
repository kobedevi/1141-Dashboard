export const Confirmation = ({ action, onClick }) => {
  return (
    <div class="confirmation">
      <h2>Confirm</h2>
      <hr />
      <p>
        Are you sure you want to <b>{action}</b> the game?
      </p>
      <button onClick={() => onClick()}>Confirm</button>
    </div>
  );
};
