import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "../../routes/Router";

export const MainLayout = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
