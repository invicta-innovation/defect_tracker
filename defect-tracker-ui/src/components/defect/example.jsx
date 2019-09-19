import React, { Component } from "react";
import Card from "../commons/card";

const defectStatus = [
  { id: 1, status: "new" },
  { id: 2, status: "open" },
  { id: 3, status: "fixed" },
  { id: 4, status: "closed" }
];
export default class Example extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <Card title="Defect status">
          <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {defectStatus.map(dStatus => (
                <tr>
                  <td>{dStatus.id}</td>
                  <td>{dStatus.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}
