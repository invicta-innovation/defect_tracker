import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TopNav from "./layout/top-nav";
import SideNav from "./layout/side-nav";
import Footer from "./layout/footer";
import Example from "./components/defect/example";
import GeneralConfig from "./components/defect/general-config/defectConfig";
import Modules from "./components/defect/modules";
import ViewProject from "./components/defect/projects/view-project";
import ViewSubModules from "./components/defect/submodules/view-submodule";
import ViewModules from "./components/defect/modules/view-module";
import Releases from "./components/defect/releases/releases";
import Projects from "./components/defect/projects";
import Test from "./components/defect/test/test";
import NewDeffect from "./components/defect/defects/new-difect";
import DynamicEdit from "./components/defect/test/dynamic-edit";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <TopNav />
        <div className="d-flex align-items-stretch">
          <SideNav />
          <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
              <Switch>
                <Route exact path="/example" component={Example} />
                <Route exact path="/defectConfig" component={GeneralConfig} />
                <Route exact path="/releases" component={Releases} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/viewProjects" component={ViewProject} />
                <Route exact path="/viewModules" component={ViewModules} />
                <Route
                  exact
                  path="/viewSubModules"
                  component={ViewSubModules}
                />
                <Route exact path="/modules" component={Modules} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/defect" component={NewDeffect} />
                <Route exact path="/form" component={DynamicEdit} />
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
