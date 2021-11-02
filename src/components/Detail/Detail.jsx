import { Route, Switch } from "react-router-dom";
import useData from "../../core/hooks/useData";
import { ClientDetail } from "../../pages/templates/ClientDetail";

export const Detail = () => {
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
      </Switch>
    </div>
  );
};
