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

export const CameraItem = ({data}) => {
  const { ipcRenderer } = useElectron();

  const [editVisible, setEditVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [refreshVisible, setRefreshVisible] = useState(false);

  const handleDelete = () => {
    ipcRenderer.send("deleteCamera", data.id);
    toggleDeleteVisible();
    openRefresh(deleteVisible);
  };

  const toggleDeleteVisible = () => {
    setDeleteVisible(!deleteVisible);
  };

  const toggleEditVisible = () => {
    setEditVisible(!editVisible);
  };

  const handleEdit = (editedData) => {
    ipcRenderer.send("saveCamera", editedData);
    toggleEditVisible();
    openRefresh(editVisible);
  };

  const toggleRefreshVisible = () => {
    setRefreshVisible(!refreshVisible);
  };

  const openRefresh = (modalVisible) => {
    if(refreshVisible === false && modalVisible === true) {
      toggleRefreshVisible();
    };
  };

  return (
    <>   

    <div className="cameracontainer">
      <div class="detail__header">
        <h1>{data.cameraName}</h1>
        <div>
          <button className="ml" onClick={toggleEditVisible}>
            <i className="bi bi-pencil-square"></i>
          </button>
          <button className="redbg ml" onClick={handleDelete}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>    
      <div className="iframeLoader">
        <iframe title={data.cameraName} src={"http://" + data.src + ":" +  data.port} frameBorder="0" className=""></iframe>
      </div>
    </div>

    {editVisible && (
      <Modal onClose={toggleEditVisible}>
        <div className="creation">
          <CreationForm
            title={`Edit ${data.id}`}
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
          text={`Are you sure you want to delete ${data.id}?`}
        />
      </Modal>
    )}

    {refreshVisible && (
      <Modal onClose={toggleRefreshVisible}>
        <div className="confirmation">
          <h2>Confirm</h2>
          <hr />
          <p>Please close the camera window and reopen it to see the changes</p>
          <button onClick={toggleRefreshVisible}>Confirm</button>
        </div>
      </Modal>
    )}

  </>

  );
};