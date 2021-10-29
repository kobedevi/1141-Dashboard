import useElectron from "../../core/hooks/useElectron";

export const StateButton = ({ stateData, clientData }) => {
  const { ipcRenderer } = useElectron();
  const { name, code } = stateData;
  const { clientName, currentState } = clientData;

  const sendState = () => {
    ipcRenderer.send("send", { state: code, client: clientName });
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
