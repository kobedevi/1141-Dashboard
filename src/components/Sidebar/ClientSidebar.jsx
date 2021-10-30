import { ClientItem } from "./ClientItem";

export const ClientSidebar = ({ data }) => {
  return (
    <div class="client__container">
      {data.map((client, index) => (
        <ClientItem data={client} key={index} />
      ))}
    </div>
  );
};
