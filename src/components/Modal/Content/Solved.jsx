import useElectron from "../../../core/hooks/useElectron";
import { StateForm } from "../../Forms/StateForm";

export const Solved = ({ closeModal }) => {
  const { ipcRenderer } = useElectron();

  const onSubmit = (data) => {
    closeModal();
    ipcRenderer.send("saveOnState", data);
  };

  return (
    <div className="creation">
      <StateForm onSubmit={onSubmit} />
    </div>
  );
};
