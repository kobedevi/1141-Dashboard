import { Actions } from "../components/Actions/Actions";
import { Chat } from "../components/Chat/Chat";
import { Detail } from "../components/Detail/Detail";
import { Progress } from "../components/Progress/Progress";
import { ClientSidebar } from "../components/Sidebar/ClientSidebar";
import { DataProvider } from "../core/context/data";

export const Dashboard = () => {
  return (
    <main>
      <DataProvider>
        <ClientSidebar />
        <div className="interactive__container">
          <Progress />
          <Actions />
          <Detail />
          <Chat />
        </div>
      </DataProvider>
    </main>
  );
};
