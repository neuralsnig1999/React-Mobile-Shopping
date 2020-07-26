import React from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './Components/Login'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/Cart'

function App() {
  return (
    <React.Fragment>
      <Login></Login>
      <switch>
        <Route exact path ='/productList' component={ProductList}></Route>
        <Route path ="/details" component={Details}></Route>
      </switch>
    
    </React.Fragment>
      
  );
}

export default App;
