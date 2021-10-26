export const ActionButton = ({ name, children }) => {
  return (
    <button class={`actions__btn actions__btn--${name}`}>{children}</button>
  );
};
