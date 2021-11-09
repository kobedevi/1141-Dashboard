import { useState } from "react";
import { Input } from "../Input";

const defaultData = {
  id: "",
  puzzleName: "",
  ipAddress: "",
  port: "",
  extraStates: [],
};

export const CreationForm = ({ title, onSubmit, initialData }) => {
  const [data, setData] = useState({
    ...defaultData,
    ...initialData,
  });

  const handleChange = (e) => {
    if (["name", "code"].includes(e.target.name)) {
      let extraStates = [...data.extraStates];
      extraStates[e.target.id][e.target.name] = e.target.value;
      setData({
        ...data,
        extraStates,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addState = (e) => {
    e.preventDefault();
    setData({
      ...data,
      extraStates: [...data.extraStates, { name: "", code: "" }],
    });
  };

  const removeState = (e) => {
    e.preventDefault();

    const newArr = data.extraStates;
    newArr.pop();

    setData({
      ...data,
      extraStates: newArr,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <>
      <h2>{title}</h2>
      <hr />
      <form className="creation__form" onSubmit={handleSubmit}>
        <Input
          name="id"
          placeholder="Id"
          type="number"
          design="creation__input"
          value={data.id}
          onChange={handleChange}
          disabled={initialData ? true : false}
        />
        <Input
          name="puzzleName"
          placeholder="Puzzle name"
          design="creation__input"
          value={data.puzzleName}
          onChange={handleChange}
        />
        <Input
          name="ipAddress"
          placeholder="Ip address"
          design="creation__input"
          value={data.ipAddress}
          onChange={handleChange}
        />
        <Input
          name="port"
          type="number"
          placeholder="Port"
          design="creation__input"
          value={data.port}
          onChange={handleChange}
        />

        <div className="creation__stateContainer">
          <h3>Extra states</h3>
          {data.extraStates.map((state, index) => (
            <div className="creation__state" key={index}>
              <Input
                id={index}
                name="name"
                placeholder="Name"
                design="stateName"
                value={state.name}
                onChange={handleChange}
              />
              <Input
                id={index}
                name="code"
                type="number"
                placeholder="Code"
                design="stateCode"
                value={state.code}
                onChange={handleChange}
              />
            </div>
          ))}
          <button onClick={addState}>
            <i className="bi bi-plus-lg"></i>
          </button>
          {/* Only show button when there are extra states in the array */}
          {data.extraStates.length && (
            <button onClick={removeState} className="redbg ml">
              <i className="bi bi-dash"></i>
            </button>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};
