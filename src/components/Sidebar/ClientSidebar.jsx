import { ClientItem } from "./ClientItem";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";

export const ClientSidebar = ({ data }) => {
  return (
    <div className="client__container">
      <SidebarHeader />
      {data.map((client, index) => (
        <ClientItem data={client} key={index} />
      ))}
      {/* <SidebarFooter /> */}
    </div>
  );
};
