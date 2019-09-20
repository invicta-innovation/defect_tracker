import React, { Component } from 'react';
import Card from "../../commons/card";
import { connect } from 'react-redux';
import {fetchSeverity} from '../../../_actions/severity-action';

class Severity extends Component {
    
   componentDidMount() {
       this.props.getSeverity()
   }
    
    render() {
        return (
            <div className="col-lg-6">
            <Card title="Severity">
              <table className="table table-striped table-hover card-text">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Severity</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.severityList.map(severity => (
                    <tr key={severity.id}>
                      <td>{severity.id}</td>
                      <td>{severity.severityName}</td>
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
    severityList: state.severityStore.severity,
  
  })
const mapDispatchToProps = dispatch => ({
    getSeverity: () => dispatch(fetchSeverity()),
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Severity);