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
      class={design}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
