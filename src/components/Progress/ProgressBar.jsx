import useData from "../../core/hooks/useData";

export const ProgressBar = () => {
  const { data } = useData();

  // get clientcount and check which clients are solved
  const clientCount = data.clients.length;
  const solvedClients = data.clients.filter(
    (client) => client.currentState === 100
  ).length;

  // Calculate percentage of solved clients
  const solvedProcent = (solvedClients * 100) / clientCount;

  return (
    <div className="progress__bar">
      <div
        className="progress__fill"
        style={{ width: solvedProcent + "%" }}
      ></div>
    </div>
  );
};
