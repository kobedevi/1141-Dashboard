import { useState } from "react";
import { Input } from "../Input";
import * as yup from "yup";
import { getValidationErrors } from "../../core/utils/Validation";

const defaultData = {
  id: "",
  src: "",
  port: "",
  cameraName: "",
};

const schema = yup.object().shape({
  id: yup.string().required(),
  src: yup.string().required(),
  port: yup.string().required(),
  cameraName: yup.string().required(),
});

export const CreationForm = ({ title, onSubmit, initialData, edit }) => {
  const [data, setData] = useState({
    ...defaultData,
    ...initialData,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (["name", "code"].includes(e.target.name)) {
      setData({
        ...data,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
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
            name="cameraName"
            placeholder="Camera name"
            design="creation__input"
            value={data.cameraName}
            onChange={handleChange}
            error={errors.cameraName}
          />
          <Input
            name="src"
            placeholder="Ip address"
            design="creation__input"
            value={data.src}
            onChange={handleChange}
            error={errors.src}
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
        </div>

        <button type="submit">
          {edit ? "Edit camera" : "Add camera"}
        </button>
      </form>
    </>
  );
};
