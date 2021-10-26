import { DetailContainer } from "../../components/Detail/DetailContainer";
import { StateButton } from "../../components/Detail/StateButton";
import useElectron from "../../core/hooks/useElectron";

export const Client01 = (params) => {
  const { ipcRenderer } = useElectron();

  const sendInactive = () => {
    ipcRenderer.send("deactivate", { client: "client-01" });
  };
  const sendActive = () => {
    ipcRenderer.send("activate", { client: "client-01" });
  };
  const sendSolved = () => {
    ipcRenderer.send("solve", { client: "client-01" });
  };

  return (
    <DetailContainer name="Client-01">
      <StateButton onClick={sendInactive} name="Inactive" />
      <StateButton onClick={sendActive} name="Active" />
      <StateButton onClick={sendSolved} name="Solved" />
    </DetailContainer>
  );
};
