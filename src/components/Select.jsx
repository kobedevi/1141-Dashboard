export const Select = ({
  design,
  values = [""],
  selected,
  name,
  id,
  onChange,
}) => {
  return (
    <select
      className={design}
      value={selected}
      id={id}
      name={name}
      onChange={onChange}
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
