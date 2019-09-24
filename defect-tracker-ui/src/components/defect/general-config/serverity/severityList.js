import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSeverity,showModal } from '../../../../_actions/severity-action';

class SeverityList extends Component {

  componentDidMount() {
    this.props.getSeverity()
  }

  render() {
    return (
      <div className="col-lg-8">
          <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>Severity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.severityList.map(severity => (
                <tr key={severity.id}>
                  <td>{severity.id}</td>
                  <td>{severity.severityType}</td>
                  <td>
                    {" "}
                    &nbsp; &nbsp;
                <button
                      type="submit"
                      class="btn btn-success btn-circle"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Edit"
                    onClick={()=>this.props.showModal(severity)}
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
  severityList: state.severityStore.severities,

})
const mapDispatchToProps = dispatch => ({
  getSeverity: () => dispatch(fetchSeverity()),
  showModal:(obj)=>dispatch(showModal({action:'EDIT',show:true, title:'Update Severity'}, obj))
})
export default connect(mapStateToProps, mapDispatchToProps)(SeverityList);