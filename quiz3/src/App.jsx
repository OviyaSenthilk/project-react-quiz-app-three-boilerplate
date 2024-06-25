// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeComponent';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1>Quiz App</h1>
        </header>
        <Switch>
          <Route path='/Home'component={Home}/>
          <Route path='/quiz' component={Quiz} />
          <Route path='/result' component={Result} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
