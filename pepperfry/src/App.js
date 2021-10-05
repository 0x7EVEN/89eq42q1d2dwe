import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import Item from './components/items/item';
import {useState, useContext} from 'react';
import {Route, Switch} from "react-router-dom";
import Products from "./components/productList/ProductsList";
import {Cart} from './components/cart/Cart';
import Payment from './components/payment/Payment';
import CardPay from './components/payCard/CardPay';
import {LoginContext} from './context/loginContext';
import ThankYou from './components/ThankYou/ThankYou';
import Login from './components/login/Login';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Order from './components/Order/Order';
import Brand from './components/brandProduct/BrandProducts';




function App () {
  const {loading} = useContext(LoginContext);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Login />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/products">
          <Navbar />
          <Login />
          <Products />
          <Footer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="/products/:id">
          <Navbar />
          <Login />
          <Item />
          <Footer />
        </Route>
        <Route path="/brand">
          <Navbar />
          <Brand />
          <Footer />
        </Route>
        <Route path="/checkout"><Payment /></Route>
        <Route path="/payment"><CardPay /></Route>
        <Route path="/thankyou"><ThankYou /></Route>
        <Route path="/order"><Order /></Route>
      </Switch>
    </div>
  );
};

export default App;
