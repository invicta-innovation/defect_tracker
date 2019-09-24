import React, { Component } from 'react'
import Card from '../../commons/card';
import { connect } from 'react-redux';
import {fetchSubModule} from '../../../_actions/submodules/get-sub-module-action'

class ViewSubModule extends Component {
    componentDidMount(){
        this.props.getSubModules();
    }
    render() {
        return (
            <div className="col-lg-12">
                
            <Card title="SubModules">
            <div className="form-row col-md-12">
                <div className="col-md-6 text-left">
                    Search:<input type="text"/>   
                </div>
                <div className="col-md-6 text-right">
                    <button  className="btn btn-primary " type="submit">Create SubModule</button>    
                </div>
               
            </div>
            <br/>
              <table className="table table-striped table-hover card-text">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Module ID</th>
                    <th>Action</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.submodulesList.map(submodules => (
                    <tr key={submodules.id}>
                      <td>{submodules.id}</td>
                      <td>{submodules.name}</td>
                      <td>{submodules.modId}</td>
                      <td>{submodules.action}</td>
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
    submodulesList: state.submodulesStore.submodules,

})
const mapDispatchToProps = dispatch => ({
    getSubModules: () => dispatch(fetchSubModule()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewSubModule);