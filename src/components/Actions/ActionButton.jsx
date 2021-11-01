import { useState } from "react";
import useElectron from "../../core/hooks/useElectron";
import { Confirmation } from "../Modal/Content/Confirmation";
import { Modal } from "../Modal/Modal";

export const ActionButton = ({ name, noModal, children }) => {
  const { ipcRenderer } = useElectron();

  const [close, setClose] = useState(true);

  const toggleModal = () => {
    setClose(!close);
  };

  // Send action command to the main process
  const sendAction = () => {
    ipcRenderer.send("action", name);
  };

  if (noModal) {
    return (
      <button class={`actions__btn actions__btn--${name}`} onClick={sendAction}>
        {children}
      </button>
    );
  }

  return (
    <>
      <button
        class={`actions__btn actions__btn--${name}`}
        onClick={toggleModal}
      >
        {children}
      </button>

      {!close && (
        <Modal onClose={toggleModal}>
          <Confirmation onClick={sendAction} action={name} />
        </Modal>
      )}
    </>
  );
};
