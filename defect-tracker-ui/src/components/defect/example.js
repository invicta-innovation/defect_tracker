import React, { Component } from "react";
import DefectStatus from './general-config/defect-status';
import DefectTypes from './general-config/defect-type';
import Severity from './general-config/severity';
import Priority from './general-config/priority';

export default class Example extends Component {
  render() {
    return (
      <div>
        {/* this is test-->  just for check the view - Sujaany */}
        <DefectStatus/>
        <DefectTypes/>
        <Priority/>
        <Severity/>
      </div>
    );
  }
}
