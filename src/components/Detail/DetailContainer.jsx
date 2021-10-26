export const DetailContainer = ({ children, name }) => {
  return (
    <>
      <h1>{name}</h1>
      <hr />
      <div class="detail__actions">{children}</div>
    </>
  );
};
