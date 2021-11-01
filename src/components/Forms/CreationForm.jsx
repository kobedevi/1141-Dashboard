import { useState } from "react";
import { Input } from "../Input";

const initialData = {
  id: "",
  puzzleName: "",
  ipAddress: "",
  port: undefined,
  // extraStates: [],
};

export const CreationForm = ({ onSubmit }) => {
  const [data, setData] = useState(initialData);

  const HandleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form className="creation__form" onSubmit={() => onSubmit(data)}>
      <Input
        name="id"
        placeholder="Id"
        design="creation__input"
        value={data.id}
        onChange={HandleChange}
      />
      <Input
        name="puzzleName"
        placeholder="Puzzle name"
        design="creation__input"
        value={data.puzzleName}
        onChange={HandleChange}
      />
      <Input
        name="ipAddress"
        placeholder="Ip address"
        design="creation__input"
        value={data.ipAddress}
        onChange={HandleChange}
      />
      <Input
        name="port"
        type="number"
        placeholder="Port"
        design="creation__input"
        value={data.port}
        onChange={HandleChange}
      />

      {/* <div class="creation__stateContainer">
        <h3>Extra states</h3>
        <div class="creation__state">
          <input class="stateName" type="text" placeholder="Name" />
          <input class="stateCode" type="text" placeholder="Code" />
        </div>
        <div class="creation__state">
          <input class="stateName" type="text" placeholder="Name" />
          <input class="stateCode" type="text" placeholder="Code" />
        </div>
        <div class="creation__state">
          <input class="stateName" type="text" placeholder="Name" />
          <input class="stateCode" type="text" placeholder="Code" />
        </div>
        <button>
          <i class="bi bi-plus-lg"></i>
        </button>
      </div> */}

      <button type="submit">Register</button>
    </form>
  );
};
