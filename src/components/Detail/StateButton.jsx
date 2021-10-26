export const StateButton = ({ name, onClick }) => {
  return (
    <div className="detail__button">
      <p>{name}</p>
      <button onClick={onClick}>
        <i className="bi bi-broadcast"></i>
      </button>
    </div>
  );
};
