// DEPENDENCIES
import * as React from 'react';
import { Router } from '@reach/router'
import { AnimatePresence } from 'framer-motion';

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
      <AnimatePresence exitBeforeEnter>
        <Navbar />
        <Background />
        
        <Router>
          <Privacy path="/privacy" />
          <Imprint path="/imprint" />
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
