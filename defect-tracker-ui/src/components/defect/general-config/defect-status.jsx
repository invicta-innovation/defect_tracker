import React, { Component } from "react";
import Card from "../../commons/card";
import { connect } from 'react-redux';
import { fetchDefectStatus } from '../../../_actions/defect-status-action';

class DefectStatus extends Component {
  componentDidMount() {
    this.props.getDefectStatus()
  }
  render() {
    return (
      <div className="col-lg-6">
        <Card title="Defect status">
          <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.defectStatusList.map(dStatus => (
                <tr key={dStatus.id}>
                  <td>{dStatus.id}</td>
                  <td>{dStatus.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  defectStatusList: state.defectStatusStore.defectStatuses,

})
const mapDispatchToProps = dispatch => ({
  getDefectStatus: () => dispatch(fetchDefectStatus()),
})
export default connect(mapStateToProps, mapDispatchToProps)(DefectStatus);