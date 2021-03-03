import React, {Fragment} from 'react';
//Routing
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Components
import Login from './components/home/Login';
import Payco from './components/checkout/payco';

function App() {
  return (
    <Router>
      <Fragment>
        <header className="App-header">
       
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
