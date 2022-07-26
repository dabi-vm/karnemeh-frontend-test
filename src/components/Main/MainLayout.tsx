import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "../../routes/Router";
import { Navbar } from "./Navbar/Navbar";

export const MainLayout = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="relative pt-20 items-start flex flex-col h-screen bg-[#F7F8F9]">
          <Switch>
            {Routes.map((route) => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component as any}
              />
            ))}
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};
