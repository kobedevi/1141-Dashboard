import useElectron from "../../core/hooks/useElectron";

export const TimerActions = () => {
  const { ipcRenderer } = useElectron();

  const handleClick = (e) => {
    ipcRenderer.send("action", e.target.dataset.actionname);
  };

  return (
    <div className="timerActions">
      <button
        data-actionname="add"
        className="timerActions__btn--add"
        onClick={handleClick}
      >
        <i data-actionname="add" className="bi bi-plus-lg"></i>
      </button>
      <button
        data-actionname="sub"
        className="timerActions__btn--sub"
        onClick={handleClick}
      >
        <i data-actionname="sub" className="bi bi-dash-lg"></i>
      </button>
    </div>
  );
};
