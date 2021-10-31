import { useState } from "react";
import { Actions } from "../components/Actions/Actions";
import { Chat } from "../components/Chat/Chat";
import { Detail } from "../components/Detail/Detail";
import { Progress } from "../components/Progress/Progress";
import { ClientSidebar } from "../components/Sidebar/ClientSidebar";
import useElectron from "../core/hooks/useElectron";

export const Dashboard = ({ clients }) => {
  const { ipcRenderer } = useElectron();
  const [data, setData] = useState(clients);

  // Initialise a listener for changes in client state
  ipcRenderer.on("state", (event, arg) => {
    const { name, state } = arg;

    // Find the index of the changed object
    const objectIndex = data.findIndex((obj) => obj.id === name);

    // Create new array and insert the new data
    const newArr = [...data];
    newArr[objectIndex].currentState = state;

    // Delete the listener because "setData" will trigger a rerender
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
