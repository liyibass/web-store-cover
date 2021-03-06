import React from "react";
// import { EventHandler } from "./scripts/EventHandler";

import "./styles/base/overall.scss";
import Header from "./components/Header/Header.component";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import ProductsPage from "./pages/ProductsPage/productsPage.component";
import CheckoutPage from "./pages/ChectutPage/ChectutPage.component";
import LoginPage from "./pages/LoginPage/LoginPage.component";
import SignupPage from "./pages/SignupPage/SignupPage.component";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage.component";
import Footer from "./components/Footer/Footer.component";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/search" component={SearchResultPage} />
      </Switch>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
