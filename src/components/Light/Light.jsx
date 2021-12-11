import { useState } from "react";

import useData from "../../core/hooks/useData";
import { ChangeIpModal } from "./ChangeIpModal";
import { LightController } from "./LightController";

export const Light = () => {
  const {
    data: { lightIP },
  } = useData();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="detail__header">
        <h1>LightsController</h1>
        <div>
          <button onClick={() => setShowModal(true)}>
            <i className="bi bi-gear-fill"></i>
          </button>
        </div>
      </div>
      <hr />

      {showModal && <ChangeIpModal closeModal={() => setShowModal(false)} />}

      {lightIP !== "0.0.0.0" ? (
        <LightController ip={lightIP} />
      ) : (
        <p className="alert alert--error">Please change the IP address first</p>
      )}
    </>
  );
};
