export const Select = ({
  design,
  values = [""],
  selected,
  name,
  id,
  onChange,
  arrayId,
  stateId,
}) => {
  return (
    <select
      className={design}
      value={selected}
      id={id}
      name={name}
      onChange={onChange}
      data-arrayid={arrayId}
      data-stateid={stateId}
    >
      <option value=""></option>
      {values.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
};
