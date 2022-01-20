import { useState } from "react";
import useElectron from "../../core/hooks/useElectron";
import { CreationForm } from "./CreationForm";
import { Confirmation } from "../Modal/Content/Confirmation";
import { Modal } from "../Modal/Modal";

const formatData = (data) => {
  return {
    ...data,
    id: data.id.split("-").pop(),
  };
};
// TODO Delete and edit (can be stolen from detailheader)

export const CameraItem = ({ data }) => {
  const { ipcRenderer } = useElectron();

  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  const toggleEditVisible = () => {
    setEditVisible(!editVisible);
  };

  const toggleDeleteVisible = () => {
    setDeleteVisible(!deleteVisible);
  };

  const handleDelete = () => {
    ipcRenderer.send("deleteCamera", data.id);
    toggleDeleteVisible();
  };

  const handleEdit = (editedData) => {
    ipcRenderer.send("saveCamera", editedData);
    toggleEditVisible();
  };

  return (
    <>
      <div className="cameracontainer">
        <div className="detail__header">
          <h1>{data.cameraName}</h1>
          <div>
            <button className="ml" onClick={toggleEditVisible}>
              <i className="bi bi-pencil-square"></i>
            </button>
            <button className="redbg ml" onClick={toggleDeleteVisible}>
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
        <div className="iframeLoader">
          <iframe
            title={data.cameraName}
            src={"http://" + data.src + ":" + data.port}
            frameBorder="0"
            className=""
          ></iframe>
        </div>
      </div>

      {editVisible && (
        <Modal onClose={toggleEditVisible}>
          <div className="creation">
            <CreationForm
              title={`Edit ${data.cameraName}`}
              initialData={formatData(data)}
              onSubmit={handleEdit}
              edit
            />
          </div>
        </Modal>
      )}

      {deleteVisible && (
        <Modal onClose={toggleDeleteVisible}>
          <Confirmation
            onClick={handleDelete}
            text={`Are you sure you want to delete ${data.cameraName}?`}
          />
        </Modal>
      )}
    </>
  );
};
