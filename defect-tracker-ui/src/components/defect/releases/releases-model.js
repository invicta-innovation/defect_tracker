<div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Add New Role</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="releaseId">
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
        </div>