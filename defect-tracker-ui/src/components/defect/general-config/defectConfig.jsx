import React, { Component } from 'react';
import DefectType from "./defect-type";
import DefectStatus from "./defect-status";
import Priority from "./priority";
import Severity from "./severity"
import Card from "../../commons/card";

class GeneralConfig extends Component {
    render() {
    return (
        <div>
        <section class="py-3">          
<Card title="Manage Defect Configurations">

<div class="row">
  <div class="col-lg-6">
        <Priority/>
    </div>
    <div class="col-lg-6">
        <Severity/>
    </div>
    </div>

<div class="row">
  <div class="col-lg-6">
        <DefectStatus/>
    </div>
    <div class="col-lg-6">
        <DefectType/>
    </div>
    </div>
</Card>
        </section>
                  </div>
              );
          }
      }
      
      export default GeneralConfig;