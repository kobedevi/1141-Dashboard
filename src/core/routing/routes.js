import { Client01 } from "../../pages/ClientDetails/Client-01";
import { Client02 } from "../../pages/ClientDetails/Client-02";
import { Client03 } from "../../pages/ClientDetails/Client-03";

export const routes = [
  {
    name: "client-01",
    component: <Client01 />,
  },
  {
    name: "client-02",
    component: <Client02 />,
  },
  {
    name: "client-03",
    component: <Client03 />,
  },
];
