import { useState } from "react";
import useData from "../../core/hooks/useData";
import { SolvedSelect } from "../Modal/Content/SolvedSelect";

const initialData = {
  options: [{ id: "", code: "" }],
  currentClient: "",
};

export const SolvedForm = ({ onSubmit }) => {
  const { data: clients } = useData();

  const idIndex = clients.findIndex(
    (x) => x.id === window.location.pathname.substr(1)
  );

  const previousData = {
    options: clients[idIndex].onSolved,
  };

  const [data, setData] = useState({
    ...initialData,
    ...previousData,
    currentClient: window.location.pathname,
  });

  const addOption = (e) => {
    e.preventDefault();
    setData({
      ...data,
      options: [...data.options, { id: "", code: "" }],
    });
  };

  const removeOption = (e) => {
    e.preventDefault();

    // Create new array
    const newArr = data.options;
    newArr.pop();

    // Put the new array in state
    setData({
      ...data,
      options: newArr,
    });
  };

  const handleChange = (e) => {
    let options = [...data.options];
    options[e.target.id][e.target.name] = e.target.value;
    setData({ ...data, options: options });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form className="solve__form" onSubmit={handleSubmit}>
      <div className="solve__stateContainer">
        {data.options.map((option, index) => (
          <SolvedSelect
            key={index}
            values={clients}
            name={option.id}
            code={option.code}
            onChange={handleChange}
            id={index}
          />
        ))}

        <button onClick={addOption}>
          <i className="bi bi-plus-lg"></i>
        </button>

        {/* Only show button when there are extra options in the array */}
        {data.options.length > 1 && (
          <button onClick={removeOption} className="redbg ml">
            <i className="bi bi-dash"></i>
          </button>
        )}
      </div>
      <button type="submit">Save</button>
    </form>
  );
};
