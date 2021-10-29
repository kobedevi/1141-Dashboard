import { clients } from "../../core/routing/routes";
import { ClientItem } from "./ClientItem";

export const ClientSidebar = () => {
  return (
    <div class="client__container">
      {clients.map((client, index) => (
        <ClientItem data={client} key={index} />
      ))}
    </div>
  );
};
