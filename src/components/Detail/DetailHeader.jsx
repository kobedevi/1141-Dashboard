import { useState } from "react";
import useElectron from "../../core/hooks/useElectron";
import { Confirmation } from "../Modal/Content/Confirmation";
import { Solved } from "../Modal/Content/Solved";
import { Modal } from "../Modal/Modal";

export const DetailHeader = ({ data }) => {
  const { ipcRenderer } = useElectron();
  const [solveVisible, setSolveVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  const toggleSolveVisible = () => {
    setSolveVisible(!solveVisible);
  };

  const toggleDeleteVisible = () => {
    setDeleteVisible(!deleteVisible);
  };

  const handleDelete = () => {
    ipcRenderer.send("deleteClient", data.id);
    toggleDeleteVisible();
  };

  return (
    <>
      <div className="detail__header">
        <h1>{`${data.id} | ${data.puzzleName}`}</h1>
        <div>
          <button onClick={toggleSolveVisible}>
            <i className="bi bi-check-all"></i>
          </button>
          <button className="redbg ml" onClick={toggleDeleteVisible}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>

      {solveVisible && (
        <Modal onClose={toggleSolveVisible}>
          <Solved closeModal={toggleSolveVisible} />
        </Modal>
      )}

      {deleteVisible && (
        <Modal onClose={toggleDeleteVisible}>
          <Confirmation
            onClick={handleDelete}
            text={`Are you sure you want to delete ${data.id}?`}
          />
        </Modal>
      )}
    </>
  );
};
