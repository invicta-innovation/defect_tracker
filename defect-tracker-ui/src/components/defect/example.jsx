import React, { Component } from "react";
import DefectStatus from '../defect/general-config/defect-status';
import DefectTypes from '../defect/general-config/defect-type';
import Severity from '../defect/general-config/severity';
import Priority from '../defect/general-config/priority';
import Releases from '../defect/releases';


export default class Example extends Component {
  render() {
    return (
      <div>
        {/* this is test-->  just for check the view - Sujaany */}
        <DefectStatus/>
        <DefectTypes/>
        <Priority/>
        <Severity/>
        <Releases/>
      </div>
    );
  }
}
