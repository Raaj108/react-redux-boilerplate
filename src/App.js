import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import Component1 from './components/component1/Component1';
import Component2 from './components/component2/Component2';
import Documentation from './docs/Documentation';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Documentation}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/component1" component={Component1}></Route>
          <Route exact path="/Component2" component={Component2}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
