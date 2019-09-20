import React, { Component } from 'react';
import Card from '../commons/card';
import { connect } from 'react-redux';
import {fetchReleases} from '../../_actions/releases-action'

class Releases extends Component {
    componentDidMount() {
        this.props.getReleases()
      }
      render() {
        return (
          <div className="col-lg-6">
            <Card title="Releases">
              <table className="table table-striped table-hover card-text">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Releases</th>
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