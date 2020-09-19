import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Order from '../pages/Order';
import Cart from '../pages/Cart';
import Pay from '../pages/Pay';

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Order} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/pay" component={Pay} />
        </Switch>

      </BrowserRouter>
  )
}

export default App
