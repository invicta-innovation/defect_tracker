import React, { Component } from 'react';
import Card from "../../../commons/card";
import { connect } from 'react-redux';
import { fetchDefectTypes } from '../../../../_actions/defect-types-action';


class DefectType extends Component {

    componentDidMount() {
        this.props.getDefectTypes()
    }

    render() {
        return (
            <div className="col-lg-8">
                    <table className="table table-striped table-hover card-text">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Defect Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.defectTypeList.map(defectType => (
                                <tr key={defectType.id}>
                                    <td>{defectType.id}</td>
                                    <td>{defectType.defectTypeName}</td>
                                    <td>
                                        {" "}
                                        &nbsp; &nbsp;
                                            <button
                                            type="submit"
                                            class="btn btn-success btn-circle"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Edit"
                                        // onClick={()=>this.props.onModalShow(role.id)}
                                        >
                                            <i class="fas fa-pen-fancy" />
                                        </button>
                                        &nbsp; &nbsp; &nbsp;
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    defectTypeList: state.defectTypeStore.defectTypes,

})
const mapDispatchToProps = dispatch => ({
    getDefectTypes: () => dispatch(fetchDefectTypes()),
})
export default connect(mapStateToProps, mapDispatchToProps)(DefectType);