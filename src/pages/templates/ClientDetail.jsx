import { DefaultActions } from "../../components/Detail/DefaultActions";
import { DefaultTips } from "../../components/Detail/DefaultTips";
import { DetailHeader } from "../../components/Detail/DetailHeader";
import { StateButton } from "../../components/Detail/StateButton";

export const ClientDetail = ({ data, noHeader = false }) => {
  return (
    <>
      <DetailHeader data={data} noHeader={noHeader} />
      <hr />
      <div className="detail__actions">
        {/* Component containing the three defaultstates buttons: inactive, active and solved */}
        <DefaultActions client={data} />

        {/* If client has extra states => create a button for every state */}
        {data.extraStates &&
          data.extraStates.map((item, index) => (
            <StateButton stateData={item} clientData={data} key={index} />
          ))}
      </div>

      {/* Check if client has tips */}
      {data.tips?.length && data.tips?.length !== 0 ? (
        <DefaultTips tips={data.tips} />
      ) : null}
    </>
  );
};
