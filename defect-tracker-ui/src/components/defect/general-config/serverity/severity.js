import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showModal} from '../../../../_actions/severity-action';
import SeverityList from './severityList';
import SeverityModal from './severity-modal';

class Severity extends Component {
    render() {
                return (
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="d-flex justify-content-between card-header">
                        <h3 className="h6 mb-0">List of Severity</h3>
                        <button
                          type="submit"
                          className="btn btn-info btn"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="addSeverity"
                          btn-align="right"
                          onClick={() => this.props.showModal(true)}
                        >
                          + 
                </button>
                        <SeverityModal />
                      </div>
                      <div className="card-body">
                        <SeverityList />
                      </div>
                    </div>
                  </div>
                );
              }
            }
            
            const mapStateToProps = state => ({
              })
            
            const mapDispatchToProps = dispatch => ({
              showModal: (severity) => dispatch(showModal({ action: 'ADD', show: true, title: 'Create Priority' }, severity))
            
            })
            
            export default connect(mapStateToProps, mapDispatchToProps)(Severity);