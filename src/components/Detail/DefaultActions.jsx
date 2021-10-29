import { StateButton } from "./StateButton";

export const DefaultActions = ({ client }) => {
  return (
    <>
      <StateButton
        stateData={{ name: "Deactivate", code: 0 }}
        clientData={client}
      />
      <StateButton
        stateData={{ name: "Activate", code: 1 }}
        clientData={client}
      />
      <StateButton
        stateData={{ name: "Solve", code: 100 }}
        clientData={client}
      />
    </>
  );
};
