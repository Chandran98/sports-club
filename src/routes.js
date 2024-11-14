import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/";
import Dashboard from "./pages/Dashboard/";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import EventsPage from "./pages/EventsPage";
import Home from "./pages/Home";
import EventInfo from "./pages/EventInfo";
import { UserSubscriptionsInfo } from "./pages/UserSubscriptions/UserSubscriptionsInfo";
import { UserEventInfo } from "./pages/UserEvents/UserEventsInfo";
import UserEventsHandler from "./components/UserEventsHandler";
import PrivateRoute from "./PrivateRoute";

export const Routes = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/profile" exact component={Profile} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/event/:id" exact component={EventInfo} />
        <PrivateRoute path="/events" component={EventsPage} />``
        {/* <PrivateRoute path="/user/events"  render={() => <UserEventsHandler {...UserEventInfo} />} />
        <Route
          path="/user/subscriptions"
          render={() => <UserEventsHandler {...UserSubscriptionsInfo} />}
        /> */}
      </Switch>
    </BrowserRouter>
  );
};
