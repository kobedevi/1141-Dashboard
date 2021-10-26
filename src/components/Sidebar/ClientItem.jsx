import { Link } from "react-router-dom";

export const ClientItem = ({ data }) => {
  return (
    <Link
      class={`client__item ${data.state === 100 && "solved"}`}
      to={`/${data.name}`}
    >
      {data.name}{" "}
      <i
        class={`bi bi-hexagon-fill ${data.status === 1 ? "green" : "red"}`}
      ></i>
    </Link>
  );
};
