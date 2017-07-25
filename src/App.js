import React, { Component } from "react";
import "./App.scss";
import "./less/sb-admin-2.less";
import { Provider } from "react-redux";
import {Grid} from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Router, Route, Switch } from "react-router";

import AppStore from "./Store/Store";

import LeftMenu from "./Components/LeftMenu";
import EditContent from "./Components/EditContent";
import EditDepartment from "./Components/EditDepartment";

class App extends Component {
  render() {
    return (
      <Grid fluid>
      <Provider store={AppStore} >
        <BrowserRouter>
      <div className="App">
        <LeftMenu/>
        <div id="page-wrapper">
        <EditContent/>
        <Switch>
          <Route path="/department" component={EditDepartment}/>
        </Switch>
        </div>
      </div>
      </BrowserRouter>
    </Provider>
    </Grid>
    );
  }
}

export default App;
