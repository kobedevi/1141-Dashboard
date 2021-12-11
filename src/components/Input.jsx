export const Input = ({
  type = "text",
  placeholder,
  design,
  onChange,
  value,
  name,
  id,
  disabled,
  error,
}) => {
  return (
    <input
      id={id}
      name={name}
      className={`${design} ${error ? "error" : ""}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
};
