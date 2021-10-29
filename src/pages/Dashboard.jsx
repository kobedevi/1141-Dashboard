import { Actions } from "../components/Actions/Actions";
import { Chat } from "../components/Chat/Chat";
import { Detail } from "../components/Detail/Detail";
import { Progress } from "../components/Progress/Progress";
import { ClientSidebar } from "../components/Sidebar/ClientSidebar";
import useElectron from "../core/hooks/useElectron";
import { clients } from "../core/routing/routes";

export const Dashboard = () => {
  const { ipcRenderer } = useElectron();

  ipcRenderer.on("state", (event, arg) => {
    const { name, state } = arg;
    const objectIndex = clients.findIndex((obj) => obj.id === name);
    clients[objectIndex].currentState = state;
  });

  return (
    <main>
      <ClientSidebar />
      <div class="interactive__container">
        <Progress />
        <Actions />
        <Detail />
        <Chat />
      </div>
    </main>
  );
};
