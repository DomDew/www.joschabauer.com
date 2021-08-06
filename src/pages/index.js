// DEPENDENCIES
import * as React from 'react';
import { Router } from '@reach/router'

// STYLES
import './App.scss';

// COMPONENTS
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import Privacy from './privacy';
import Imprint from './imprint';

function App() {
  return (
    <div className="main-wrapper">
        <Navbar />
        <Background />
        
        <Router>
          <Privacy path="/privacy" />
          <Imprint path="/imprint" />
        </Router>
    </div>
  );
}

export default App;
