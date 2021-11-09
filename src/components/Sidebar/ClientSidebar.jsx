import useData from "../../core/hooks/useData";
import { ClientItem } from "./ClientItem";
import { SidebarHeader } from "./SidebarHeader";

export const ClientSidebar = () => {
  // Get data from context
  const { data } = useData();

  return (
    <div className="client__container">
      <SidebarHeader />
      {data.map((client, index) => (
        <ClientItem data={client} key={index} />
      ))}
    </div>
  );
};
