import React from "react";
import { Route, Switch } from "react-router-dom"; //
import GetAllJobs from "./components/GetAllJobs";
import DetailJob from "./components/DetailJob";
import AddNewJob from "./components/AddNewJob";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: GetAllJobs },
  // { path: "/", key: "ROOT", exact: true, component: AddNewJob },
  {
    path: "/jobdetail/:id?/:company?/:position?/:location?/:description?",
    key: "JOBDETAIL",
    exact: true,
    component: DetailJob,
  },
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        component: () => <h1>App Page</h1>,
      },
    ],
  },
];

export default ROUTES;
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
