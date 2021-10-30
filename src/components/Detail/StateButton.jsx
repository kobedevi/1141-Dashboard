import useElectron from "../../core/hooks/useElectron";

export const StateButton = ({ stateData, clientData }) => {
  const { ipcRenderer } = useElectron();
  const { name, code } = stateData;
  const { id, currentState } = clientData;

  // Send state and client to the main process
  const sendState = () => {
    ipcRenderer.send("send", { state: code, client: id });
  };

  return (
    <div className={`detail__button ${currentState === code && "state"}`}>
      <p>{name}</p>
      <button onClick={() => sendState()}>
        <i className="bi bi-broadcast"></i>
      </button>
    </div>
  );
};

// ${state === clientState && "state"}
