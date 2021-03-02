import React, {Fragment} from 'react';
//Routing
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
//Components
import Login from './components/home/Login';
import Payco from './components/checkout/payco';

function App() {
  return (
    <Router>
      <Fragment>
        <header className="App-header">
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to={"/"}>Home</Link>
          <Link to={"/checkout"}>Checkout</Link>
        </header>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/checkout" component={Payco} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
