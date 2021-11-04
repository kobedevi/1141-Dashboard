export const Input = ({
  type = "text",
  placeholder,
  design,
  onChange,
  value,
  name,
  id,
  disabled,
}) => {
  return (
    <input
      id={id}
      name={name}
      className={design}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
};
