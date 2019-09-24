import React, { Component } from 'react'
import Card from '../../commons/card';
import { connect } from 'react-redux';
import {fetchModule} from "../../../_actions/module-action"

class ViewModule extends Component {
    componentDidMount(){
        this.props.getModules();
    }
    render() {
        return (
            <div className="col-lg-12">
                
            <Card title="Modules">
            <div className="form-row col-md-12">
                <div className="col-md-6 text-left">
                    Search:<input type="text"/>   
                </div>
                <div className="col-md-6 text-right">
                    <button  className="btn btn-primary " type="submit">Create Module</button>    
                </div>
               
            </div>
            <br/>
              <table className="table table-striped table-hover card-text">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Project ID</th>
                    <th>Duration</th>
                    <th>Team ID</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.modulesList.map(modules => (
                    <tr key={modules.id}>
                      <td>{modules.id}</td>
                      <td>{modules.name}</td>
                      <td>{modules.proId}</td>
                      <td>{modules.duration}</td>
                      <td>{modules.teamId}</td>
                      <td><button  className="btn btn-primary " type="submit">Edit</button></td>
                      <td><button  className="btn btn-danger " type="submit">Delete</button></td>
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
    modulesList: state.modulesStore.modules,

})
const mapDispatchToProps = dispatch => ({
    getModules: () => dispatch(fetchModule()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewModule);