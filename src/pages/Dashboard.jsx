import { Actions } from "../components/Actions/Actions";
import { Chat } from "../components/Chat/Chat";
import { Detail } from "../components/Detail/Detail";
import { Progress } from "../components/Progress/Progress";
import { ClientSidebar } from "../components/Sidebar/ClientSidebar";

export const Dashboard = () => {
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
