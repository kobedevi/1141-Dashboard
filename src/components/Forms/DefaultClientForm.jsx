import { useState } from "react";
import useData from "../../core/hooks/useData";
import useElectron from "../../core/hooks/useElectron";
import { Input } from "../Input";
import * as yup from "yup";
import { getValidationErrors } from "../../core/utils/Validation";

const defaultData = {
  ipAddress: "",
  port: "",
  extraStates: [],
};

const schema = yup.object().shape({
  ipAddress: yup.string().required(),
  port: yup.string().required(),
  extraStates: yup
    .array()
    .of(
      yup
        .object()
        .shape({ name: yup.string().required(), code: yup.string().required() })
    ),
});

// Delete "Client-" from data.id
const formatData = (data) => {
  return {
    ...data,
    id: data.id.split("-").pop(),
  };
};

export const DefaultClientForm = ({ closeModal }) => {
  // Get data and ipcRenderer from context
  const { ipcRenderer } = useElectron();
  const { data } = useData();

  const [values, setValues] = useState({
    ...defaultData,
    ...formatData(data.clients[0]),
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (["name", "code"].includes(e.target.name)) {
      let extraStates = [...values.extraStates];
      extraStates[e.target.id][e.target.name] = e.target.value;
      setValues({
        ...values,
        extraStates,
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addState = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      extraStates: [...values.extraStates, { name: "", code: "" }],
    });
  };

  const removeState = (e) => {
    e.preventDefault();

    const newArr = values.extraStates;
    newArr.pop();

    setValues({
      ...values,
      extraStates: newArr,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    schema
      .validate(values, { abortEarly: false })
      .then(() => {
        ipcRenderer.send("saveClient", values);
        closeModal();
      })
      .catch((err) => {
        console.log(getValidationErrors(err));
        setErrors(getValidationErrors(err));
      });
  };

  return (
    <>
      <h2>Change DefaultClient</h2>
      <hr />
      <form className="creation__form" onSubmit={handleSubmit}>
        <div className="creation-scroll creation-scroll--default">
          <Input
            name="ipAddress"
            placeholder="Ip address"
            design="creation__input"
            value={values.ipAddress}
            onChange={handleChange}
            error={errors.ipAddress}
          />
          <Input
            name="port"
            type="number"
            placeholder="Port"
            design="creation__input"
            value={values.port}
            onChange={handleChange}
            error={errors.port}
          />

          <div className="creation__stateContainer">
            <h3>Extra states</h3>
            {values.extraStates.map((state, index) => (
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
            {values.extraStates.length !== 0 && (
              <button onClick={removeState} className="redbg ml">
                <i className="bi bi-dash"></i>
              </button>
            )}
          </div>
        </div>

        <button type="submit">Save</button>
      </form>
    </>
  );
};
