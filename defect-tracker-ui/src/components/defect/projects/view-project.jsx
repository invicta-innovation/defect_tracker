import React, { Component } from 'react'
import Card from '../../commons/card';
import { connect } from 'react-redux';
import {fetchProject} from "../../../_actions/projects/get-project-action"

class ViewProject extends Component {
    componentDidMount(){
        this.props.getProjects();
    }
    render() {
        return (
            <div className="col-lg-12">
                
            <Card title="Projects">
            <div className="form-row col-md-12">
                <div className="col-md-6 text-left">
                    Search:<input type="text"/>   
                </div>
                <div className="col-md-6 text-right">
                    <button  className="btn btn-primary " type="submit">Create Project</button>    
                </div>
               
            </div>
            <br/>
              <table className="table table-striped table-hover card-text">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Duration</th>
                    <th>P.Manager</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.projectsList.map(projects => (
                    <tr key={projects.id}>
                      <td>{projects.id}</td>
                      <td>{projects.name}</td>
                      <td>{projects.code}</td>
                      <td>{projects.duration}</td>
                      <td>{projects.manager}</td>
                      <td>{projects.status}</td>
                      <td>{projects.action}</td>
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
    projectsList: state.projectsStore.projects,

})
const mapDispatchToProps = dispatch => ({
    getProjects: () => dispatch(fetchProject()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewProject);