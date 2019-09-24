import React, { Component } from 'react';
import { fetchPriority,showModal } from '../../../../_actions/priority-action';
import {connect} from 'react-redux';

class PriorityList extends Component {
  componentDidMount() {
    this.props.getPriority();
  }

    render() {
        return (
            <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>PriorityType</th>
              </tr>
            </thead>
            <tbody>
              {this.props.PriorityList.map(priority => (
                <tr key={priority.id}>
                  <td>{priority.id}</td>
                  <td>{priority.priorityType}</td>
                  <button onClick={()=>this.props.showModal(priority)}>edit</button>
                </tr>
              ))}
              
            </tbody>
          </table>
        );
    }
}

const mapStateToProps = state =>({
    PriorityList:state.priorityStore.priorities
  })
  const mapDispatchToProps=dispatch=>({
    getPriority:()=>dispatch(fetchPriority()),
    showModal: (priority)=> dispatch(showModal({action:'EDIT',show:true,title:'Update Priority'},priority))
  })
export default connect(mapStateToProps,mapDispatchToProps)(PriorityList);