import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NEW_PERIORITY,UPDATE_PERIORITY} from '../../../../_constants/types';
import { Modal, Form, Col } from "react-bootstrap";
import {showModal} from '../../../../_actions/priority-action'


class PriorityModal extends Component {
state={
    id:null,
    priorityType:''
  }
  
  componentWillReceiveProps(nextProps){
    console.log(nextProps.priorityObj)
    this.setState({
      id:nextProps.priorityObj.id,
      priorityType:nextProps.priorityObj.priorityType
      });
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit=()=>{
    console.log(this.props.modaldata.action)
    if(this.props.modaldata.action=='EDIT'){
      this.props.updatePriority(this.state)
    }else{
      this.props.createPriority(this.state)
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
              <Form.Label> Priority Type : </Form.Label>
              <Form.Control
              value={this.state.priorityType} 
              type="text" 
              name="priorityType"
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
    modaldata:state.priorityStore.modaldata,
    priorityObj:state.priorityStore.priority
  })
  const mapDispatchToProps=dispatch=>({
    updatePriority: (obj)=> dispatch({type:UPDATE_PERIORITY,payload:obj}),
    createPriority: (obj)=> dispatch({type:NEW_PERIORITY,payload:obj}),
    showModal: status =>dispatch(showModal({action:'ADD',show:status,title:'Add Priority'}))
  })
export default connect(mapStateToProps,mapDispatchToProps)(PriorityModal)