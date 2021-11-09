import useElectron from "../../../core/hooks/useElectron";
import { SolvedForm } from "../../Forms/SolvedForm";

export const Solved = ({ closeModal }) => {
  const { ipcRenderer } = useElectron();

  const onSubmit = (data) => {
    closeModal();
    ipcRenderer.send("saveOnSolved", data);
  };

  return (
    <div className="creation">
      <h2>OnSolve logic</h2>
      <hr />
      <SolvedForm onSubmit={onSubmit} />
    </div>
  );
};
