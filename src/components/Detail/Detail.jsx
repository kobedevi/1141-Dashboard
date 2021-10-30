import { Route, Switch } from "react-router-dom";
import { ClientDetail } from "../../pages/templates/ClientDetail";

export const Detail = ({ data }) => {
  return (
    <div className="detail__container">
      <Switch>
        {data.map((client, index) => (
          <Route path={`/${client.id}`} key={index}>
            <ClientDetail data={client} />
          </Route>
        ))}
      </Switch>
    </div>
  );
};
