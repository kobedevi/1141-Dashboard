import useElectron from "../../../core/hooks/useElectron";
import { CreationForm } from "../../Forms/CreationForm";

export const Creation = ({ closeModal }) => {
  const { ipcRenderer } = useElectron();

  const onSubmit = (data) => {
    closeModal();
    ipcRenderer.send("saveCamera", data);
  };

  return (
    <div className="creation">
      <CreationForm onSubmit={onSubmit} title="Add camera" />
    </div>
  );
};
