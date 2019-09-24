import React, { Component } from "react";
import Card from "../../commons/card";
import { Form, Col, Row } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import BasicDrop from "../../commons/basic-drop";

class NewDeffect extends Component {
  state = { editorState: "" };
  render() {
    return (
      <>
        <Card>
          <Form>
            <Row>
              <Col sm="4" xs="12">
                <Form.Group as={Row} controlId="new_deffect_id">
                  <Form.Label column sm="3" xs="3">
                    ID
                  </Form.Label>
                  <Col sm="9" xs="9">
                    <Form.Control
                      plaintext
                      name="new_deffect_id"
                      readOnly
                      defaultValue="PRO/DEF/001"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm="8" xs="12">
                <Form.Group as={Row} controlId="new_deffect_title">
                  <Form.Label column xs="3">
                    Title
                  </Form.Label>
                  <Col xs="9">
                    <Form.Control
                      name="new_deffect_title"
                      defaultValue="PRO/DEF/001"
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group as={Row} controlId="new_deffect_description">
              <Form.Label column xs="2">
                Description
              </Form.Label>
              <Col xs="10">
                <Editor
                  editorState={this.state.editorState}
                  wrapperClassName="desc-wrapper"
                  editorClassName="home-editor"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="new_deffect_steps">
              <Form.Label column xs="2">
                Steps To Recreate
              </Form.Label>
              <Col xs="10">
                <div>
                  <Editor
                    editorState={this.state.editorState}
                    wrapperClassName="home-wrapper"
                    editorClassName="home-editor"
                  />
                </div>
              </Col>
            </Form.Group>

            <Row>
              <Col sm="6" xs="12">
                <Form.Group as={Row} controlId="new_deffect_severity">
                  <Form.Label column xs="3">
                    Severity
                  </Form.Label>
                  <Col xs="9">
                    <Form.Control name="new_deffect_severity" defaultValue="" />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm="6" xs="12">
                <Form.Group as={Row} controlId="new_deffect_priority">
                  <Form.Label column xs="3">
                    Priority
                  </Form.Label>
                  <Col xs="9">
                    <Form.Control name="new_deffect_priority" defaultValue="" />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm="8" xs="12">
                <Form.Group as={Row} controlId="new_deffect_assignee">
                  <Form.Label column xs="3">
                    Assignee
                  </Form.Label>
                  <Col xs="9">
                    <Form.Control name="new_deffect_assignee" defaultValue="" />
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group as={Row} controlId="">
              <Form.Label column xs="2">
                Refrences
              </Form.Label>
              <Col xs="10">
                <BasicDrop />
              </Col>
            </Form.Group>
            <div className="float-right">
              <button type="button" className="btn btn-sm btn-secondary">
                Cancel
              </button>
              &nbsp; &nbsp;
              <button type="submit" className="btn btn-sm btn-primary">
                Create
              </button>
            </div>
          </Form>
        </Card>
      </>
    );
  }
}

export default NewDeffect;
