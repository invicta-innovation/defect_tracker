import React, { Component } from 'react';
import DefectType from "./defect-type/defect-type";
import DefectStatus from "./defect-status/defect-status";
import Priority from "./priority/priority";
import Severity from "./serverity/severity"
import Card from "../../commons/card";

class GeneralConfig extends Component {
    render() {
        return (
            <div>
                <section class="py-3">
                    <Card title="Manage Defect Configurations">
                        <ul class="nav nav-pills mb-3" id="pills-tab" defectConfig="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-priority-tab" data-toggle="pill" href="#pills-priority" role="tab" aria-controls="pills-priority" aria-selected="true">Priority</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-severity-tab" data-toggle="pill" href="#pills-severity" role="tab" aria-controls="pills-severity" aria-selected="false">Severity</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-defectStatus-tab" data-toggle="pill" href="#pills-defectStatus" role="tab" aria-controls="pills-defectStatus" aria-selected="false">DefectStatus</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-defectType-tab" data-toggle="pill" href="#pills-defectType" role="tab" aria-controls="pills-defectType" aria-selected="false">DefectType</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-priority" role="tabpanel" aria-labelledby="pills-priority-tab"><Priority /></div>
                            <div class="tab-pane fade" id="pills-severity" role="tabpanel" aria-labelledby="pills-severity-tab"><Severity /></div>
                            <div class="tab-pane fade" id="pills-defectStatus" role="tabpanel" aria-labelledby="pills-defectStatus-tab"><DefectStatus /></div>
                            <div class="tab-pane fade" id="pills-defectType" role="tabpanel" aria-labelledby="pills-defectType-tab"><DefectType /></div>
                        </div>
                    </Card>
                </section>
            </div>
        );
    }
}

export default GeneralConfig;