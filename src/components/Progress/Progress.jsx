import useData from "../../core/hooks/useData";
import useElectron from "../../core/hooks/useElectron";

const procent = 65;

export const Progress = () => {
  // Get data and ipcRenderer from context
  const { ipcRenderer } = useElectron();
  const { data } = useData();

  const togglePlayers = () => {
    if (data.players === 4) {
      ipcRenderer.send("setPlayers", 3);
    } else {
      ipcRenderer.send("setPlayers", 4);
    }
  };

  return (
    <div className="progress__container">
      <h1 className="progress__timer">21:18</h1>
      <div className="progress__bar">
        <div className="progress__fill" style={{ width: procent + "%" }}></div>
      </div>
      <button className="progress__button" onClick={togglePlayers}>
        <p>
          {data.players} <i className="bi bi-people-fill"></i>
        </p>
      </button>
    </div>
  );
};
