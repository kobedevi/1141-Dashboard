import { ClientItem } from "./ClientItem";

const data = [
  {
    name: "client-01",
    state: 100,
    status: 1,
  },
  {
    name: "client-02",
    state: 2,
    status: 1,
  },
  {
    name: "client-03",
    state: 0,
    status: 0,
  },
];

export const ClientSidebar = () => {
  return (
    <div class="client__container">
      {data.map((client, index) => (
        <ClientItem data={client} key={index} />
      ))}
    </div>
  );
};
