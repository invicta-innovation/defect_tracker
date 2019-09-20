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
import DefectType from './components/defect/general-config/defect-type';
import Priority from './components/defect/general-config/priority';
import Severity from './components/defect/general-config/severity';
import Releases from './components/defect/releases';
import Projects from './components/defect/projects';
import Modules from './components/defect/modules';

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
              <Route exact path="/defectTypes" component={DefectType}/>
              <Route exact path="/priority" component={Priority}/>
              <Route exact path="/severity" component={Severity}/>
              <Route exact path="/releases" component={Releases}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/modules" component={Modules}/>

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
