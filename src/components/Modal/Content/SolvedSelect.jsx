import { Select } from "../../Select";

const defaultValues = [0, 1, 100];
const defaultValueNames = ['Inactive', 'Active', 'Solved']

export const SolvedSelect = ({
  values,
  name,
  code,
  arrayId,
  stateId,
  onChange,
}) => {
  let clientStates = [];
  let clientStateNames = [];

  const idIndex = values.findIndex((x) => x.id === name);

  values[idIndex]?.extraStates.forEach((state) => {
    clientStates.push(state.code);
    clientStateNames.push(state.name);
  });

  return (
    <div className="onState__state">
      <Select
        design="stateName"
        values={values.map((client) => client.id)}
        titles={values.map((client) => client.puzzleName)}
        selected={name}
        name="id"
        arrayId={arrayId}
        stateId={stateId}
        onChange={onChange}
      />
      <Select
        design="stateCode"
        values={[...defaultValues, ...clientStates]}
        titles={[...defaultValueNames, ...clientStateNames]}
        selected={code}
        name="code"
        arrayId={arrayId}
        stateId={stateId}
        onChange={onChange}
      />
    </div>
  );
};
