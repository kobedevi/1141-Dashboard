import { CreationForm } from "../../Forms/CreationForm";

export const Creation = (params) => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="creation">
      <h2>Register client</h2>
      <hr />
      <CreationForm onSubmit={onSubmit} />
    </div>
  );
};
