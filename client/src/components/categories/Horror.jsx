import React from "react";
import { Route, Switch } from "react-router-dom";
import Horror from "./Horror";
import SearchCategory from "../../pages/SearchCategory";

const HorrorRoutes = () => {
  return (
    <Switch>
      <Route path="/horror">
        <div>
          <SearchCategory />
          Horror
        </div>
      </Route>
    </Switch>
  );
};

export default HorrorRoutes;