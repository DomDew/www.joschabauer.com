// DEPENDENCIES
import * as React from 'react';
import { Router } from '@reach/router'

// STYLES
import './App.scss';

// COMPONENTS
import Privacy from './privacy';
import Home from '../components/Home';
import Imprint from './imprint';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Home path="/" /> 
        <Privacy path="/privacy" />
        <Imprint path="/imprint" />
      </Router> 
    </div>
  );
}

export default App;
