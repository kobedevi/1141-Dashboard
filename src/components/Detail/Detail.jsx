import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "../../core/routing/routes";

export const Detail = () => {
  return (
    <div class="detail__container">
      <Switch>
        {routes.map((route, index) => (
          <Route path={`/${route.name}`} key={index}>
            {route.component}
          </Route>
        ))}
        <Route path="/">
          <Redirect to="/client-01" />
        </Route>
      </Switch>
    </div>
  );
};
