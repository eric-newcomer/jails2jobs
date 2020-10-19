import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Community from './components/Community';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="Content">
          <Route path="/" exact component={Home} />
          <Route path="/community" exact component={Community} />
        </div>
      </div>
    </Router>
  );
}

export default App;
