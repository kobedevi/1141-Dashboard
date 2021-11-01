export const Input = ({
  type = "text",
  placeholder,
  design,
  onChange,
  value,
  name,
}) => {
  return (
    <input
      id={name}
      name={name}
      className={design}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
