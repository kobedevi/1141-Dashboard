import useElectron from "../../../core/hooks/useElectron";
import { CreationForm } from "../../Forms/CreationForm";

export const Creation = ({ closeModal }) => {
  const { ipcRenderer } = useElectron();

  const onSubmit = (data) => {
    ipcRenderer.send("saveClient", data);
  };

  return (
    <div className="creation">
      <h2>Register client</h2>
      <hr />
      <CreationForm onSubmit={onSubmit} closeModal={closeModal} />
    </div>
  );
};
