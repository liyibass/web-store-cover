import React, { useEffect } from "react";
// import { EventHandler } from "./scripts/EventHandler";

import "./styles/base/overall.scss";
import Header from "./components/Header/Header.component";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import ProductsPage from "./pages/ProductsPage/productsPage.component";

function App() {
  // useEffect(() => {
  //   let ev = new EventHandler();
  // }, []);
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
      </Switch>
    </div>
  );
}

export default App;
