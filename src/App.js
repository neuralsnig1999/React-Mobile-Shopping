import React from "react";
import Login from "./Components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
// import ProductList from './Components/ProductList'
import Details from "./Components/Details";
// import Cart from './Components/Cart'
import List from "./components/list";
import AddToCart from "./components/addToCart";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Redirect from="(/)" to="/login" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={List}></Route>
        <Route path="/details" component={Details}></Route>
        <Route
          path="/cart/:ids"
          render={(props) => <AddToCart {...props} />}
        ></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
