import useElectron from "../../core/hooks/useElectron";

export const ActionButton = ({ name, children }) => {
  const { ipcRenderer } = useElectron();

  // Send action command to the main process
  const sendAction = () => {
    ipcRenderer.send("action", name);
  };

  return (
    <button class={`actions__btn actions__btn--${name}`} onClick={sendAction}>
      {children}
    </button>
  );
};
