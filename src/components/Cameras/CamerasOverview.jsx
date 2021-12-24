import useData from "../../core/hooks/useData";
import { CameraItem } from "./CameraItem";
import { useState } from "react";
import { Creation } from "./Creation";
import { Modal } from "../Modal/Modal";

export const CamerasOverview = () => {
  // Get data from context
  const { data } = useData();

  const [visible, setVisible] = useState(false);

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
          {data.cameras.map((cam, index) => (
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