import React, { Component } from 'react';
import Card from '../../commons/card';
import { connect } from 'react-redux';
import {fetchReleases} from '../../../_actions/releases-action';
import {Form,Modal,Col} from 'react-bootstrap'

class Releases extends Component {
    componentDidMount() {
        this.props.getReleases()
      }
      constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      render() {
         
        return (
          <div>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header>
                <Modal.Title>Add Release</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="roleId">
                      <Form.Label>Release Id </Form.Label>
                      <Form.Control readOnly />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Release Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="submit"
                  class="btn btn-danger "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Accept"
                  onClick={this.handleClose}
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-success "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Accept"
                >
                  Add Release
                </button>
              </Modal.Footer>
            </Modal>
          <section class="py-3">
          <Card title="Manage Releases">
          <div class="d-flex flex-row-reverse ">
            <button
              type="submit"
              class="btn btn-success"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Accept"
              onClick={this.handleShow}
            >
              Add Release
            </button>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <table className="table table-striped table-hover card-text">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Releases</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.releasesList.map(release => (
                    <tr key={release.id}>
                      <td>{release.id}</td>
                      <td>{release.releaseName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </section>
          </div>
        );
      }
    }
    const mapStateToProps = state => ({
        releasesList: state.releasesStore.releases,
    
    })
    const mapDispatchToProps = dispatch => ({
        getReleases: () => dispatch(fetchReleases()),
    })
    export default connect(mapStateToProps, mapDispatchToProps)(Releases);

    