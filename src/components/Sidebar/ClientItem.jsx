import { NavLink } from "react-router-dom";

export const ClientItem = ({ data }) => {
  return (
    <NavLink
      activeclassName="client__item active"
      className={`client__item ${data.currentState === 100 && "solved"}`}
      to={`/${data.id}`}
      cl
    >
      {data.id}{" "}
      <i
        className={`bi bi-hexagon-fill ${data.status === 1 ? "green" : "red"}`}
      ></i>
    </NavLink>
  );
};
