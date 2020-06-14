import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Result from './components/Result';
import Header from './components/header';
import Home from './components/Home';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:title' component={Result} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
