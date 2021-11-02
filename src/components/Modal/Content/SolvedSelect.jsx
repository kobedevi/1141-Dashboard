import { Select } from "../../Select";

const defaultValues = [0, 1, 100];

export const SolvedSelect = ({ values, name, code, id, onChange }) => {
  let clientStates = [];

  const idIndex = values.findIndex((x) => x.id === name);

  values[idIndex]?.extraStates.forEach((state) => {
    clientStates.push(state.code);
  });

  return (
    <div className="solve__state">
      <Select
        design="stateName"
        values={values.map((client) => client.id)}
        selected={name}
        name="id"
        id={id}
        onChange={onChange}
      />
      <Select
        design="stateCode"
        values={[...defaultValues, ...clientStates]}
        selected={code}
        name="code"
        id={id}
        onChange={onChange}
      />
    </div>
  );
};
