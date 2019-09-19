import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import TopNav from './layout/top-nav';
import SideNav from './layout/side-nav';
import Footer from './layout/footer';
import Example from './components/defect/example';
import DefectStatus from './components/defect/defect-status';

function App() {
  return (
    <Provider store={store}>
 <div className="App">
      <TopNav/>
      <div class="d-flex align-items-stretch">
        <SideNav />
        <div class="page-holder w-100 d-flex flex-wrap">
          <div class="container-fluid px-xl-5">
            <Switch>
              <Route exact path="/example" component={Example} />
              <Route exact path="/defectStatus" component={DefectStatus} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </div>
    </Provider>
   );
}

export default App;
