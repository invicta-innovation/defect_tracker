import React, { Component } from 'react';
import Card from "../../commons/card";
import { connect } from 'react-redux';
import { fetchPriority } from '../../../_actions/priority-action';

class Priority extends Component {
  componentDidMount() {
    this.props.getPriority()
  }
  render() {
    return (
      <div className="col-lg-8">
        <Card title="Priority">
          <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.priorityList.map(priority => (
                <tr key={priority.id}>
                  <td>{priority.id}</td>
                  <td>{priority.priorityType}</td>
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
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  priorityList: state.priorityStore.priority,

})
const mapDispatchToProps = dispatch => ({
  getPriority: () => dispatch(fetchPriority()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Priority);