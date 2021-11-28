import useData from "../../core/hooks/useData";
import { ClientItem } from "./ClientItem";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";

export const ClientSidebar = () => {
  // Get data from context
  const { data } = useData();

  return (
    <div className="client__container">
      <SidebarHeader />
      <ClientItem data={data[0]} />
      {data.slice(1).map((client, index) => (
        <ClientItem data={client} key={index} />
      ))}
      <SidebarFooter />
    </div>
  );
};
