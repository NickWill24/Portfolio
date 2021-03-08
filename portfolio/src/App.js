import React, { useState } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Introduction from './components/Introduction'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={Introduction}/>
            <Route path="/About" component={About}/>
            <Route path="/Project" component={Project}/>
            <Route path="/Contact" component={Contact}/>
          </Switch>
        </main>
    </div>

  );
}

export default App;
