import useData from "../../core/hooks/useData";
import useElectron from "../../core/hooks/useElectron";

export const PlayerToggle = () => {
  // Get data and ipcRenderer from context
  const { ipcRenderer } = useElectron();
  const { data } = useData();

  const togglePlayers = () => {
    if (data.players === 3) {
      ipcRenderer.send("setPlayers", 2);
    } else {
      ipcRenderer.send("setPlayers", 3);
    }
  };

  return (
    <button className="progress__button" onClick={togglePlayers}>
      <p>
        {data.players} <i className="bi bi-people-fill"></i>
      </p>
    </button>
  );
};
