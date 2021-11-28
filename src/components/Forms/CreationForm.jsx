import { useState } from "react";
import { Input } from "../Input";
import * as yup from "yup";
import { getValidationErrors } from "../../core/utils/Validation";

const defaultData = {
  id: "",
  puzzleName: "",
  ipAddress: "",
  port: "",
  extraStates: [],
  tips: [],
};

const schema = yup.object().shape({
  id: yup.string().required(),
  puzzleName: yup.string().required(),
  ipAddress: yup.string().required(),
  port: yup.string().required(),
  extraStates: yup
    .array()
    .of(
      yup
        .object()
        .shape({ name: yup.string().required(), code: yup.string().required() })
    ),
  tips: yup.array().of(yup.string().required()),
});

export const CreationForm = ({ title, onSubmit, initialData, edit }) => {
  const [data, setData] = useState({
    ...defaultData,
    ...initialData,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (["name", "code"].includes(e.target.name)) {
      let extraStates = [...data.extraStates];
      extraStates[e.target.id][e.target.name] = e.target.value;
      setData({
        ...data,
        extraStates,
      });
    } else if (e.target.name === "tip") {
      let tips = [...data.tips];

      tips[e.target.id] = e.target.value;

      setData({
        ...data,
        tips,
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

  const addTip = (e) => {
    e.preventDefault();
    setData({
      ...data,
      tips: [...data.tips, ""],
    });
  };

  const removeTip = (e) => {
    e.preventDefault();

    const newArr = data.tips;
    newArr.pop();

    setData({
      ...data,
      tips: newArr,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    schema
      .validate(data, { abortEarly: false })
      .then(() => {
        onSubmit(data);
      })
      .catch((err) => {
        console.log(getValidationErrors(err));
        setErrors(getValidationErrors(err));
      });
  };

  return (
    <>
      <h2>{title}</h2>
      <hr />
      <form className="creation__form" onSubmit={handleSubmit}>
        <div className="creation-scroll">
          <Input
            name="id"
            placeholder="Id"
            type="number"
            design="creation__input"
            value={data.id}
            onChange={handleChange}
            disabled={initialData ? true : false}
            error={errors.id}
          />
          <Input
            name="puzzleName"
            placeholder="Puzzle name"
            design="creation__input"
            value={data.puzzleName}
            onChange={handleChange}
            error={errors.puzzleName}
          />
          <Input
            name="ipAddress"
            placeholder="Ip address"
            design="creation__input"
            value={data.ipAddress}
            onChange={handleChange}
            error={errors.ipAddress}
          />
          <Input
            name="port"
            type="number"
            placeholder="Port"
            design="creation__input"
            value={data.port}
            onChange={handleChange}
            error={errors.port}
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
                  error={errors[`extraStates[${index}].name`]}
                />
                <Input
                  id={index}
                  name="code"
                  type="number"
                  placeholder="Code"
                  design="stateCode"
                  value={state.code}
                  onChange={handleChange}
                  error={errors[`extraStates[${index}].code`]}
                />
              </div>
            ))}
            <button onClick={addState}>
              <i className="bi bi-plus-lg"></i>
            </button>
            {/* Only show button when there are extra states in the array */}
            {data.extraStates.length !== 0 && (
              <button onClick={removeState} className="redbg ml">
                <i className="bi bi-dash"></i>
              </button>
            )}
          </div>

          <div className="creation__stateContainer">
            <h3>Default tips</h3>
            {data.tips.map((tip, index) => (
              <div className="creation__state" key={index}>
                <Input
                  id={index}
                  name="tip"
                  placeholder="Tip"
                  design="tips"
                  value={tip}
                  onChange={handleChange}
                  error={errors[`tips[${index}]`]}
                />
              </div>
            ))}
            <button onClick={addTip}>
              <i className="bi bi-plus-lg"></i>
            </button>
            {/* Only show button when there are extra states in the array */}
            {data.tips.length !== 0 && (
              <button onClick={removeTip} className="redbg ml">
                <i className="bi bi-dash"></i>
              </button>
            )}
          </div>
        </div>

        <button type="submit">
          {edit ? "Edit client" : "Register client"}
        </button>
      </form>
    </>
  );
};
