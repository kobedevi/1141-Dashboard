import { useState } from "react";
import useElectron from "../../core/hooks/useElectron";
import { CreationForm } from "./CreationForm";
// import { DefaultClientForm } from "../Forms/DefaultClientForm";
// import { Confirmation } from "../Modal/Content/Confirmation";
// import { OnState } from "../Modal/Content/OnState";
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


  const handleDelete = () => {
    ipcRenderer.send("deleteCamera", data.id);
  };

  const toggleEditVisible = () => {
    setEditVisible(!editVisible);
  };

  const handleEdit = (editedData) => {
    ipcRenderer.send("saveCamera", editedData);
    toggleEditVisible();
  };

  return (
    <>   

    <div className="cameracontainer">
      <div class="detail__header">
        <h1>{data.cameraName}</h1>
        <button className="ml" onClick={toggleEditVisible}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="redbg ml" onClick={handleDelete}>
          <i className="bi bi-trash-fill"></i>
        </button>
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

  </>

  );
};