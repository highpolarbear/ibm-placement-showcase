import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";

const Homepage = React.lazy(() =>
  import("./components/pages/homepage/homepage")
);

const BpPulse = React.lazy(() =>
  import("./components/pages/projects/bppulse/bppulse")
);

const ServiceReminder = React.lazy(() =>
  import("./components/pages/projects/servicereminder/servicereminder")
);

const TraderBonus = React.lazy(() =>
  import("./components/pages/projects/traderbonus/traderbonus")
);

const EoW = React.lazy(() => import("./components/pages/projects/eow/eow"));

// const Test = React.lazy(() => import("./components/pages/test/test"));

const history = createBrowserHistory();
wrapHistory(history);

const Routes = () => {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router history={history}>
        <Switch>
          {/* <Route path="/test" exact component={Test} /> */}
          <Route path="/projects/bp-pulse" exact component={BpPulse} />
          <Route
            path="/projects/castrol-service-reminder"
            exact
            component={ServiceReminder}
          />
          <Route path="/projects/trader-bonus" exact component={TraderBonus} />
          <Route path="/projects/eow" exact component={EoW} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default Routes;