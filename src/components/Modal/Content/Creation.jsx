import useElectron from "../../../core/hooks/useElectron";
import { CreationForm } from "../../Forms/CreationForm";

export const Creation = ({ closeModal }) => {
  const { ipcRenderer } = useElectron();

  const onSubmit = (data) => {
    closeModal();
    ipcRenderer.send("saveClient", data);
  };

  return (
    <div className="creation">
      <CreationForm onSubmit={onSubmit} title="Create client" />
    </div>
  );
};
