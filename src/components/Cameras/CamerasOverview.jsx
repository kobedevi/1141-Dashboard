import { CameraItem } from "./CameraItem";
import { useEffect, useState } from "react";
import { Creation } from "./Creation";
import { Modal } from "../Modal/Modal";
import useElectron from "../../core/hooks/useElectron";

// const defaultData = [];

export const CamerasOverview = () => {
  const { ipcRenderer } = useElectron();

  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  // Register listener after render
  useEffect(() => {
    setData(ipcRenderer.sendSync("getCameras"));
    // Register
    ipcRenderer.on("cameraChange", (event, arg) => {
      console.log("Got cameras");
      setData(arg);
    });
  }, [ipcRenderer]);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="cameras__overview">
      <div className="detail__header">
        <h1>Cam Controller</h1>
        <div>
          <button onClick={toggleVisible}>
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
      <hr />

      <div className="detail__container">
        {data.map((cam, index) => (
          <CameraItem data={cam} key={index} />
        ))}
      </div>

      {visible && (
        <Modal onClose={toggleVisible}>
          <Creation closeModal={toggleVisible} />
        </Modal>
      )}
    </div>
  );
};
