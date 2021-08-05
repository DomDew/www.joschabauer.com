// DEPENDENCIES
import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet';

// STYLES
import './App.scss';

// COMPONENTS
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import Privacy from '../components/Privacy';
import Imprint from '../components/Imprint';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Switch>
          <Route path="/" exact> 
            <Navbar />
            <Background />
          </Route>
          <Route path="/privacy">
            <Navbar />
            <Background />
            <AnimatePresence exitBeforeEnter>
              <Privacy />
            </AnimatePresence>
          </Route>
          <Route path="/imprint">
            <Navbar />
            <Background />
            <AnimatePresence exitBeforeEnter>
              <Imprint />
            </AnimatePresence>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
