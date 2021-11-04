import { Link, Switch, Route } from "react-router-dom";
import useData from "../../core/hooks/useData";

export const SidebarFooter = () => {
  const { data } = useData();

  return (
    <div className="client__configure">
      <Switch>
        <Route path="/configure">
          <Link to={`/${data[0].id}`} className="client__item">
            Dashboard<i className="bi bi-speedometer2"></i>
          </Link>
        </Route>
        <Route path="/">
          <Link to="/configure" className="client__item">
            Configure <i className="bi bi-gear-fill"></i>
          </Link>
        </Route>
      </Switch>
    </div>
  );
};
