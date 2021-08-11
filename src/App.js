import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingKart from './pages/ShoppingKart';
import ProductDetails from './pages/ProductDetails';
import './App.css';

import Home from './pages/Home';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingKart" component={ ShoppingKart } />
        <Route exact path="/product/:idProduct" component={ProductDetails}  />
        {/* <Route component={ NotFound } /> */}
      </Switch>
    </BrowserRouter>
    

  
  );
}

export default App;
