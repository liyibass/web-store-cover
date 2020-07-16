import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import NavigationListPage from "./pages/NavigationListPage/NavigationListPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/products" component={ProductListPage} />
        <Route path="/navigation" component={NavigationListPage} />
      </Switch>
    </div>
  );
}

export default App;
