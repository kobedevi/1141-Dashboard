import { useState } from "react";
import { Actions } from "../components/Actions/Actions";
import { Chat } from "../components/Chat/Chat";
import { Detail } from "../components/Detail/Detail";
import { Progress } from "../components/Progress/Progress";
import { ClientSidebar } from "../components/Sidebar/ClientSidebar";
import useElectron from "../core/hooks/useElectron";
import { clients } from "../core/routing/routes";

export const Dashboard = () => {
  const { ipcRenderer } = useElectron();
  const [data, setData] = useState(clients);

  ipcRenderer.on("state", (event, arg) => {
    const { name, state } = arg;
    const objectIndex = data.findIndex((obj) => obj.id === name);
    const newArr = [...data];
    newArr[objectIndex].currentState = state;
    ipcRenderer.removeAllListeners("state");
    setData(newArr);
  });

  return (
    <main>
      <ClientSidebar data={data} />
      <div class="interactive__container">
        <Progress />
        <Actions />
        <Detail data={data} />
        <Chat />
      </div>
    </main>
  );
};
