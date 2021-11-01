import { useState } from "react";
import { Creation } from "../Modal/Content/Creation";
import { Modal } from "../Modal/Modal";

export const SidebarHeader = () => {
  const [visible, setVisible] = useState();

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div class="client__header">
        <h2>Clients</h2>
        <button onClick={toggleVisible}>
          <i class="bi bi-plus-lg"></i>
        </button>
      </div>

      {visible && (
        <Modal onClose={toggleVisible}>
          <Creation />
        </Modal>
      )}
    </>
  );
};
