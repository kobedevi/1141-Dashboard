import { useState } from "react";
import useData from "../../core/hooks/useData";
import { SolvedSelect } from "../Modal/Content/SolvedSelect";

const initialData = {
  onState: {},
  currentClient: "",
};

export const StateForm = ({ onSubmit }) => {
  const { data: clients } = useData();

  // Find the index of the current client in the clients array
  const idIndex = clients.clients.findIndex(
    (x) => x.id === window.location.pathname.substr(1)
  );

  // Fetch previousdata
  const previousData = {
    onState: clients.clients[idIndex].onState,
  };

  // Merge initialData with previousData and add to state
  const [data, setData] = useState({
    ...initialData,
    ...previousData,
    currentClient: window.location.pathname,
  });

  // Add option to selected state
  const addOption = (e) => {
    e.preventDefault();

    const stateId = e.target.dataset.stateid;

    setData({
      ...data,
      onState: {
        ...data.onState,
        [stateId]: [...data.onState[stateId], { id: "", code: "" }],
      },
    });
  };

  // Remove option from selected state
  const removeOption = (e) => {
    e.preventDefault();

    const stateId = e.target.dataset.stateid;

    // Create new array
    const newArr = data.onState[stateId];
    newArr.pop();

    // Put the new array in state
    setData({
      ...data,
      onState: {
        ...data.onState,
        [stateId]: newArr,
      },
    });
  };

  // HandleChange Per state
  const handleChange = (e) => {
    const stateId = e.target.dataset.stateid;
    const arrayId = e.target.dataset.arrayid;

    let newArray = [...data.onState[stateId]];

    newArray[arrayId] = {
      ...newArray[arrayId],
      [e.target.name]: e.target.value,
    };

    setData({
      ...data,
      onState: {
        ...data.onState,
        [stateId]: newArray,
      },
    });
  };

  // Send data to main process
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(data);
  };

  return (
    <form className="onState__form" onSubmit={handleSubmit}>
      <div className="onState__optionsContainer">
        {/* Loop over every OnState */}
        {Object.entries(data.onState).map((item, index) => (
          <div key={index} className="creation__stateContainer me">
            <h3>{`On state-${item[0]} change:`}</h3>

            {/* Loop over every object in this specific onState array */}
            {item[1].map((subItem, index) => (
              <SolvedSelect
                key={index}
                values={clients.clients}
                name={subItem.id}
                code={subItem.code}
                onChange={handleChange}
                arrayId={index}
                stateId={item[0]}
              />
            ))}
            <button data-stateid={item[0]} onClick={addOption}>
              <i data-stateid={item[0]} className="bi bi-plus-lg"></i>
            </button>

            {/* Only show button when there are extra options in the array */}
            {item[1].length !== 0 && (
              <button
                data-stateid={item[0]}
                onClick={removeOption}
                className="redbg ml"
              >
                <i data-stateid={item[0]} className="bi bi-dash"></i>
              </button>
            )}
          </div>
        ))}
      </div>
      <button type="submit">Save</button>
    </form>
  );
};
