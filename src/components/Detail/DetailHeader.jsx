import { useState } from "react";
import useElectron from "../../core/hooks/useElectron";
import { CreationForm } from "../Forms/CreationForm";
import { Confirmation } from "../Modal/Content/Confirmation";
import { Solved } from "../Modal/Content/Solved";
import { Modal } from "../Modal/Modal";

// Delete "Client-" from data.id
const formatData = (data) => {
  return {
    ...data,
    id: data.id.split("-").pop(),
  };
};

export const DetailHeader = ({ data }) => {
  const { ipcRenderer } = useElectron();

  const [solveVisible, setSolveVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);

  const toggleEditVisible = () => {
    setEditVisible(!editVisible);
  };

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

  const handleEdit = (editedData) => {
    ipcRenderer.send("saveClient", editedData);
    toggleEditVisible();
  };

  return (
    <>
      <div className="detail__header">
        <h1>{`${data.id} | ${data.puzzleName}`}</h1>
        <div>
          <button onClick={toggleSolveVisible}>
            <i className="bi bi-check-all"></i>
          </button>
          <button className="ml" onClick={toggleEditVisible}>
            <i className="bi bi-pencil-square"></i>
          </button>
          <button className="redbg ml" onClick={toggleDeleteVisible}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>

      {editVisible && (
        <Modal onClose={toggleEditVisible}>
          <div className="creation">
            <CreationForm
              title={`Edit ${data.id}`}
              initialData={formatData(data)}
              onSubmit={handleEdit}
            />
          </div>
        </Modal>
      )}

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
