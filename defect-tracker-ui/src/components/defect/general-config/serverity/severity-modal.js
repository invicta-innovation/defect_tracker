import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UPDATE_SEVERITY, NEW_SEVERITY } from '../../../../_constants/types';
import { Modal, Form, Col } from "react-bootstrap";
import {showModal} from '../../../../_actions/severity-action';

class SeverityModal extends Component {
    state={
        id:null,
        severityType:''
      }
      
      componentWillReceiveProps(nextProps){
        console.log(nextProps.severityObj)
        this.setState({
          id:nextProps.severityObj.id,
          severityType:nextProps.severityObj.severityType
          });
      }
      handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
      handleSubmit=()=>{
        console.log(this.props.modaldata.action)
        if(this.props.modaldata.action=='EDIT'){
          this.props.updateSeverity(this.state)
        }else{
          this.props.createSeverity(this.state)
        }
      }
      
      render() {
        console.log("call compnent render");
        const { show,title} = this.props.modaldata;
      return (
          <div>
        <Modal show={show}>
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Id : </Form.Label>
                <Form.Control
                value={this.state.id} 
                type="text" 
                name="id"
                onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Severity Type : </Form.Label>
                  <Form.Control
                  value={this.state.severityType} 
                  type="text" 
                  name="severityType"
                  onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="submit"
                class="btn btn-danger "
                onClick={()=>this.props.showModal(false)}
              >
                Close
              </button>
                <button
                  type="submit"
                  class="btn btn-info "
               onClick={this.handleSubmit}
               >
                Save Changes
              </button>
            </Modal.Footer>
          </Modal>
            </div>
            )
        }
    }
    const mapStateToProps = state =>({
        modaldata:state.severityStore.modaldata,
        severityObj:state.severityStore.severity
      })
      const mapDispatchToProps=dispatch=>({
        updateSeverity: (obj)=> dispatch({type:UPDATE_SEVERITY,payload:obj}),
        createSeverity: (obj)=> dispatch({type:NEW_SEVERITY,payload:obj}),
        showModal: status =>dispatch(showModal({action:'ADD',show:status,title:'Add Severity'}))
      })
    export default connect(mapStateToProps,mapDispatchToProps)(SeverityModal)