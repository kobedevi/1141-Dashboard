import { useState } from "react";
import useElectron from "../../core/hooks/useElectron";
import { Solved } from "../Modal/Content/Solved";
import { Modal } from "../Modal/Modal";

export const DetailHeader = ({ data }) => {
  const { ipcRenderer } = useElectron();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleDelete = () => {
    ipcRenderer.send("deleteClient", data.id);
  };

  return (
    <>
      <div className="detail__header">
        <h1>{`${data.id} | ${data.puzzleName}`}</h1>
        <div>
          <button onClick={toggleVisible}>
            <i className="bi bi-check-all"></i>
          </button>
          <button className="redbg ml" onClick={handleDelete}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>

      {visible && (
        <Modal onClose={toggleVisible}>
          <Solved closeModal={toggleVisible} />
        </Modal>
      )}
    </>
  );
};
