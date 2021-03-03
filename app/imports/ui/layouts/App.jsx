import React from 'react';
import 'semantic-ui-css/semantic.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CreateStudent from '../pages/CreateStudent';
import EditStudent from '../pages/EditStudent';
import NotFound from '../pages/NotFound';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={CreateStudent}/>
            <Route path="/student/:email" component={EditStudent}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
