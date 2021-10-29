import { Route, Switch } from "react-router-dom";
import { clients } from "../../core/routing/routes";
import { ClientDetail } from "../../pages/templates/ClientDetail";

export const Detail = () => {
  return (
    <div className="detail__container">
      <Switch>
        {clients.map((client, index) => (
          <Route path={`/${client.id}`} key={index}>
            <ClientDetail data={client} />
          </Route>
        ))}
      </Switch>
    </div>
  );
};
