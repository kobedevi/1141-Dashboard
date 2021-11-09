export const Confirmation = ({ text, onClick }) => {
  return (
    <div className="confirmation">
      <h2>Confirm</h2>
      <hr />
      <p>{text}</p>
      <button onClick={() => onClick()}>Confirm</button>
    </div>
  );
};
