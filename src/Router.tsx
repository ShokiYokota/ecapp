import React from "react";
import {Route,Switch} from "react-router";
import {Login,Home} from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path ="/login" component = {Login} />
      <Route path ="/posts/:id" component = {Post} />
      <Route exact path ="/(/)?" component = {Home} />
    </Switch>
  )
}
export default Router;