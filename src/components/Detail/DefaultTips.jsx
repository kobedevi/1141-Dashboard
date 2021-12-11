import { useState } from "react";
import useElectron from "../../core/hooks/useElectron";

export const DefaultTips = ({ tips }) => {
  const { ipcRenderer } = useElectron();

  const [tip, setTip] = useState("");

  const handleChange = (e) => {
    setTip(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ipcRenderer.send("sendTip", tip);
  };

  return (
    <>
      <h2 className="tip__title">Default tips:</h2>
      <hr />
      <form className="tip__container" onSubmit={handleSubmit}>
        <select value={tip} onChange={handleChange}>
          <option value=""></option>
          {tips.map((tip, i) => (
            <option key={i} value={tip}>
              {tip}
            </option>
          ))}
        </select>
        <button type="submit">Send</button>
      </form>
    </>
  );
};
