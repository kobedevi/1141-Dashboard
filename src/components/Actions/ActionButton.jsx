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
  const handleClick = () => {
    ipcRenderer.send("action", name);
    toggleModal();
  };

  if (noModal) {
    return (
      <button
        className={`actions__btn actions__btn--${name}`}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }

  return (
    <>
      <button
        className={`actions__btn actions__btn--${name}`}
        onClick={toggleModal}
      >
        {children}
      </button>

      {!close && (
        <Modal onClose={toggleModal}>
          <Confirmation onClick={handleClick} action={name} />
        </Modal>
      )}
    </>
  );
};
