import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchDefectStatus } from '../../../../_actions/defect-status-action';

class DefectStatus extends Component {
  componentDidMount() {
    this.props.getDefectStatus()
  }
  render() {
    return (
      <div className="col-lg-8">
        
          <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.defectStatusList.map(dStatus => (
                <tr key={dStatus.id}>
                  <td>{dStatus.id}</td>
                  <td>{dStatus.status}</td>
                  <td>
                    {" "}
                    &nbsp; &nbsp;
                <button
                      type="submit"
                      class="btn btn-success btn-circle"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Edit"
                    // onClick={()=>this.props.onModalShow(role.id)}
                    >
                      <i class="fas fa-pen-fancy" />
                    </button>
                    &nbsp; &nbsp; &nbsp;
              </td>
                </tr>
              ))}
            </tbody>
          </table>
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