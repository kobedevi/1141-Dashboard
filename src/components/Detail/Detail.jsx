import { Route, Switch, Redirect } from "react-router-dom";
import useData from "../../core/hooks/useData";
import { ClientDetail } from "../../pages/templates/ClientDetail";

export const Detail = () => {
  // Get data from context
  const { data } = useData();

  return (
    <div className="detail__container">
      <Switch>
        {/* Create a separate component for each client*/}
        {data.map((client, index) => (
          <Route path={`/${client.id}`} key={index}>
            <ClientDetail data={client} />
          </Route>
        ))}
        <Route path="/">
          {/* Redirect to first client in the array */}
          <Redirect to={`/${data[0].id}`} />
        </Route>
      </Switch>
    </div>
  );
};
