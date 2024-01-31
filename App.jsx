import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home">
          {/* Home page component */}
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;