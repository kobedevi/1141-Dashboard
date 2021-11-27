import { useEffect, useState } from "react";
import useElectron from "../../core/hooks/useElectron";

export const Chat = () => {
  const { ipcRenderer } = useElectron();

  const [text, setText] = useState("");
  const [previousTip, setPreviousTip] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Send tip to main process
  const handleSubmit = (e) => {
    e.preventDefault();

    ipcRenderer.send("sendTip", text);
    setText("");
  };

  // After a tip is send change placeholder to be previous tip
  useEffect(() => {
    ipcRenderer.on("tipSend", (event, arg) => {
      setPreviousTip(arg);
    });
  }, [ipcRenderer]);

  return (
    <form className="chat__container" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder={previousTip}
      />
      <button type="submit">Send</button>
    </form>
  );
};
