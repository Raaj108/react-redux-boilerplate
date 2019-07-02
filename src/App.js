import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="App container">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
