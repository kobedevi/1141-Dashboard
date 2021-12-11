import { useState } from "react";

import useElectron from "../../core/hooks/useElectron";
import { Modal } from "../Modal/Modal";
import { Input } from "../Input";
import useData from "../../core/hooks/useData";

export const ChangeIpModal = ({ closeModal }) => {
  // Get data and ipcRenderer from context
  const { ipcRenderer } = useElectron();
  const {
    data: { lightIP },
  } = useData();

  const [ip, setIp] = useState(lightIP);

  const handleChange = (e) => {
    setIp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ipcRenderer.send("saveLightIp", ip);
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <h2>Change IP address</h2>
      <hr />
      <form className="lightIp__form" onSubmit={handleSubmit}>
        <Input
          name="ip"
          placeholder="0.0.0.0"
          design="lightIp__input"
          value={ip}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};
