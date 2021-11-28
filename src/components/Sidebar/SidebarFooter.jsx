import useElectron from "../../core/hooks/useElectron";

export const SidebarFooter = (params) => {
  const { ipcRenderer } = useElectron();

  const handleClick = () => {
    ipcRenderer.send("checkLive");
  };

  return (
    <div className="client__footer">
      <button className="client__item" onClick={handleClick}>
        Refresh <i className="bi bi-exclamation-circle-fill"></i>
      </button>
    </div>
  );
};
