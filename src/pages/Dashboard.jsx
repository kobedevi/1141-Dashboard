import { useState } from "react";
import { Actions } from "../components/Actions/Actions";
import { Chat } from "../components/Chat/Chat";
import { Detail } from "../components/Detail/Detail";
import { Progress } from "../components/Progress/Progress";
import { ClientSidebar } from "../components/Sidebar/ClientSidebar";
import useElectron from "../core/hooks/useElectron";

export const Dashboard = () => {
  const { ipcRenderer } = useElectron();

  const [data, setData] = useState(ipcRenderer.sendSync("getClients"));

  ipcRenderer.on("dataChange", (event, arg) => {
    ipcRenderer.removeAllListeners("dataChange");
    setData(arg);
  });

  return (
    <main>
      <ClientSidebar data={data} />
      <div className="interactive__container">
        <Progress />
        <Actions />
        <Detail data={data} />
        <Chat />
      </div>
    </main>
  );
};
