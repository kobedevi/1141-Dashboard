import { DefaultActions } from "../../components/Detail/DefaultActions";
import { StateButton } from "../../components/Detail/StateButton";

export const ClientDetail = ({ data }) => {
  return (
    <>
      <h1>{`${data.id} | ${data.puzzleName}`}</h1>
      <hr />
      <div class="detail__actions">
        <DefaultActions client={data} />
        {data.extraStates &&
          data.extraStates.map((item, index) => (
            <StateButton stateData={item} clientData={data} key={index} />
          ))}
      </div>
    </>
  );
};
