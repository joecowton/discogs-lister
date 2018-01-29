import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  renderData(data) {
    return(
      <div className="card card-block" key={data.title}>
        <h4 className="card title">{data.title}</h4>
        <p className="card-text">{data.label}</p>
        <img className="img img-tumbnail" src={data.thumb}></img>
        {/* <a className="btn btn-primary" href={data.resource_url}>View</a> */}
      </div>
    )
  }

  render () {
    return(
      <div className="release-list">
        {this.props.data.map(this.renderData)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { data: state.data }
}

export default connect(mapStateToProps, actions)(ReleaseList)
