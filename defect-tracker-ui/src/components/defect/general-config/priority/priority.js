import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../../_actions/priority-action';
import PriorityList from './priorityList';
import PriorityModal from './priority-modal';

class Priority extends Component {

  render() {
    return (
      <div className="col-sm-4">
        <div className="card">
          <div className="d-flex justify-content-between card-header">
            <h3 className="h6 mb-0">List of Priority</h3>
            <button
              type="submit"
              className="btn btn-info btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="addPriority"
              btn-align="right"
              onClick={() => this.props.showModal(true)}
            >
              + 
    </button>
            <PriorityModal />
          </div>
          <div className="card-body">
            <PriorityList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  })

const mapDispatchToProps = dispatch => ({
  showModal: (priority) => dispatch(showModal({ action: 'ADD', show: true, title: 'Create Priority' }, priority))

})

export default connect(mapStateToProps, mapDispatchToProps)(Priority);