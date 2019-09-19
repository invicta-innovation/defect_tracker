import React from 'react';
import {Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TopNav from './layout/top-nav';
import SideNav from './layout/side-nav';
import Footer from './layout/footer';
import Example from './components/defect/example';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <div class="d-flex align-items-stretch">
        <SideNav />
        <div class="page-holder w-100 d-flex flex-wrap">
          <div class="container-fluid px-xl-5">
            <Switch>
              <Route exact path="/example" component={Example} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
