import React from "react";
import { hydrate, render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Helmet from "react-helmet";

import { App } from "./App";

const AppRouting = () => <>
  <Helmet>
    <html lang="en"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:type" content="profile" />
    <meta property="og:locale" content="en_US" />
    <meta property="profile:first_name" content="Andrew" />
    <meta property="profile:last_name" content="Fabiny" />
    <meta property="profile:username" content="andrewnfabiny" />
    <meta property="og:site_name" content="Andrew N Fabiny" />
    <script src="https://kit.fontawesome.com/daeb3e1490.js" type="text/javascript"></script>
    <noscript>You need to enable JavaScript to run this app.</noscript>
  </Helmet>
  <Router>
    <Switch>
      <Route path="/">
        <App/>
      </Route>
    </Switch>
  </Router>
</>;

const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<AppRouting />, rootElement);
} else {
  render(<AppRouting />, rootElement);
}