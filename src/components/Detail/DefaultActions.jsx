import { StateButton } from "./StateButton";

export const DefaultActions = ({ client }) => {
  return (
    <>
      <StateButton
        stateData={{ name: "Inactive", code: 0 }}
        clientData={client}
      />
      <StateButton
        stateData={{ name: "Active", code: 1 }}
        clientData={client}
      />
      <StateButton
        stateData={{ name: "Solved", code: 100 }}
        clientData={client}
      />
    </>
  );
};
